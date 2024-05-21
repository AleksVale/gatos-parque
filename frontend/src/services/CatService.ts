import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { ICat } from '@/interfaces/cat'
import { TCreateCatSchema } from '@/pages/admin/Cat/validation'
import { SuccessResponse } from '@/constants/routes'

export const CatService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<ICat>>(
      `admin/cats?${searchParams?.toString()}`,
    )
  },

  create: async (data: TCreateCatSchema) => {
    return http.post<SuccessResponse>('admin/cats', data)
  },

  update: async (id: string, data: TCreateCatSchema) => {
    return http.patch<SuccessResponse>(`admin/cats/${id}`, data)
  },

  get: async (id?: string) => {
    return http.get<ICat>(`admin/cats/${id}`)
  },
}
