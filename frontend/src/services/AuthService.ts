import http from '@/lib/http'

interface ISignInResponse {
  token: string
  role: string
  firstName: string
  lastName: string
}

export const AuthService = {
  signIn: async (email: string, password: string) => {
    return http.post<ISignInResponse>('/auth', {
      email,
      password,
    })
  },
}
