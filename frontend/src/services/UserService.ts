import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IUser } from '@/interfaces/user'
import { TCreateUserSchema } from '@/pages/admin/User/validation'
import { SuccessResponse } from '@/constants/routes'

export const UserService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IUser>>(
      `admin/users?${searchParams?.toString()}`,
    )
  },

  create: async (data: TCreateUserSchema) => {
    return http.post<SuccessResponse>('admin/users', data)
  },
}
