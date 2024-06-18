import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { SuccessResponse } from '@/constants/routes'
import { TCreateRouteSchema } from '@/pages/admin/Routes/validation'
import { IRoute } from '@/interfaces/route'

interface TCreateRouteForm extends Omit<TCreateRouteSchema, 'points'> {
  points: number[]
}

export const RouteService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IRoute>>(
      `admin/routes?${searchParams?.toString()}`,
    )
  },

  create: async (data: TCreateRouteForm) => {
    return http.post<SuccessResponse>('admin/routes', data)
  },

  update: async (id: string, data: TCreateRouteForm) => {
    return http.patch<SuccessResponse>(`admin/routes/${id}`, data)
  },

  get: async (id?: string) => {
    return http.get<IRoute>(`admin/routes/${id}`)
  },
}
