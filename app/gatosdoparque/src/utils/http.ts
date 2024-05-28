import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

interface ErrorResponse {
  status: number
}

const serverURL = 'http://54.235.56.231/api'

const http: AxiosInstance = axios.create({
  baseURL: serverURL,
  headers: {
    'Content-type': 'application/json',
  },
})

// Request interceptor
http.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<unknown>) => {
    const token = await AsyncStorage.getItem('token')
    if (token && token !== 'undefined') {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }
    return config
  },
  (error: ErrorResponse) => {
    return Promise.reject(error)
  },
)

export default http
