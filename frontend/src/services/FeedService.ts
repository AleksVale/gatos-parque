import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IFeed } from '@/interfaces/feed'
import { TCreateFeedSchema } from '@/pages/admin/Feed/validation'
import { SuccessResponse } from '@/constants/routes'

export const FeedService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IFeed>>(
      `admin/feed?${searchParams?.toString()}`,
    )
  },
  create: async (data: TCreateFeedSchema) => {
    return http.post<SuccessResponse>('admin/feed', data)
  },
  update: async (data: TCreateFeedSchema, id?: string) => {
    return http.patch<SuccessResponse>(`admin/feed/${id}`, data)
  },
  updateStatus: async (id?: string) => {
    return http.patch<SuccessResponse>(`admin/feed/status/${id}`)
  },
  get: async (id?: string) => {
    return http.get<IFeed>(`admin/feed/${id}`)
  },
}
