import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthService } from '../services/auth.service'

interface AuthContextType {
  token: string | null
  login: (email: string, senha: string) => Promise<string>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token && token !== 'undefined') {
        setToken(token)
      } else {
        setToken(null)
      }
    }

    fetchToken()
  }, [setToken])

  const login = useCallback(async (email: string, password: string) => {
    const response = await AuthService.login(email, password)
    setToken(response.token)
    return response.token
  }, [])

  const logout = useCallback(() => {
    setToken(null)
  }, [])

  const value = useMemo(
    () => ({ token, login, logout }),
    [token, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
