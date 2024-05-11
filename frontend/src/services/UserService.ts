import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IUser } from '@/interfaces/user'

export const UserService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IUser>>(
      `/users?${searchParams?.toString()}`,
    )
  },
}
