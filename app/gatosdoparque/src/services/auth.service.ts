import http from '../utils/http'

interface LoginResponse {
  token: string
  role: string
  firstName: string
  lastName: string
}

export const AuthService = {
  async login(email: string, password: string) {
    const response = await http.post<LoginResponse>('/auth', {
      email,
      password,
    })
    return response.data
  },
}
