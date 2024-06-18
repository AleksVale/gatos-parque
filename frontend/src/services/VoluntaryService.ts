import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IVoluntary } from '@/interfaces/voluntary'
import { TUpdateVoluntarySchema } from '@/pages/admin/Voluntary/validation'
import { SuccessResponse } from '@/constants/routes'
import { TCreateVoluntaryForm } from '@/pages/RequestVoluntary/validation'

export const VoluntaryService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IVoluntary>>(
      `admin/voluntary?${searchParams?.toString()}`,
    )
  },

  update: async (id: string, data: TUpdateVoluntarySchema) => {
    return http.patch<SuccessResponse>(`admin/voluntary/${id}`, data)
  },

  get: async (id?: string) => {
    return http.get<IVoluntary>(`admin/voluntary/${id}`)
  },

  create: async (data: TCreateVoluntaryForm) => {
    return http.post<SuccessResponse>('supporter/voluntary', data)
  },
}
