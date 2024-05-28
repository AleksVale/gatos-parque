import { SignUpFormData } from '../screens/SignUp'
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
  async createSupporter(data: SignUpFormData) {
    const response = await http.post('/auth/signUp', data)
    return response.data
  },
}
