import useLocalStorage from '@/hooks/useLocalStorage'
import { AuthService } from '@/services/AuthService'
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from 'react'

interface AuthContextType {
  token: string | null
  profile: string | null
  firstName: string | null
  lastName: string | null
  login: (email: string, senha: string) => Promise<string>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [token, setToken] = useLocalStorage<string | null>('token', null)
  const [profile, setProfile] = useLocalStorage<string | null>('profile', null)
  const [firstName, setFirstName] = useLocalStorage<string | null>(
    'firstName',
    null,
  )
  const [lastName, setLastName] = useLocalStorage<string | null>(
    'lastName',
    null,
  )
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && token !== 'undefined') {
      setToken(JSON.parse(token))
    } else {
      setToken(null)
    }
    setLoading(false)
  }, [setToken])

  const login = useCallback(
    async (email: string, password: string) => {
      const response = await AuthService.signIn(email, password)
      setToken(response.data.token)
      setProfile(response.data.role)
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      return response.data.role
    },
    [setFirstName, setLastName, setProfile, setToken],
  )

  const logout = useCallback(() => {
    setToken(null)
    setProfile(null)
  }, [setProfile, setToken])

  const value = useMemo(
    () => ({ token, login, logout, profile, firstName, lastName }),
    [token, login, logout, profile, firstName, lastName],
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
