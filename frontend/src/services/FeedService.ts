import http from '@/lib/http'
import { PaginatedResponseDto } from './interfaces'
import { IFeed } from '@/interfaces/feed'

export const FeedService = {
  list: async (searchParams?: URLSearchParams) => {
    return http.get<PaginatedResponseDto<IFeed>>(
      `admin/feed?${searchParams?.toString()}`,
    )
  },
}