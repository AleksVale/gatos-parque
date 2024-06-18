import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IPoint } from '@/interfaces/point'
import { SuccessResponse } from '@/constants/routes'
import { TCreatePointSchema } from '@/pages/admin/Point/validation'

export const PointService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IPoint>>(
      `admin/points?${searchParams?.toString()}`,
    )
  },

  create: async (data: TCreatePointSchema) => {
    return http.post<SuccessResponse>('admin/points', data)
  },

  update: async (id: string, data: TCreatePointSchema) => {
    return http.patch<SuccessResponse>(`admin/points/${id}`, data)
  },

  get: async (id?: string) => {
    return http.get<IPoint>(`admin/points/${id}`)
  },
}
