import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IAdoption } from '@/interfaces/adoption'
import { TUpdateAdoptionSchema } from '@/pages/admin/Adoption/validation'
import { SuccessResponse } from '@/constants/routes'

export const AdoptionService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IAdoption>>(
      `admin/adoption?${searchParams?.toString()}`,
    )
  },

  update: async (id: string, data: TUpdateAdoptionSchema) => {
    return http.patch<SuccessResponse>(`admin/adoption/${id}`, data)
  },

  get: async (id?: string) => {
    return http.get<IAdoption>(`admin/adoption/${id}`)
  },
}
