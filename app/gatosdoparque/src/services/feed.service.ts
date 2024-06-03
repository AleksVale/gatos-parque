import { IFeed } from '../Interfaces/IFeed'
import { PaginatedResponseDto } from '../Interfaces/Pagination'
import http from '../utils/http'

export const FeedService = {
  getAllFeeds: async (page: number, perPage: number) => {
    return http.get<PaginatedResponseDto<IFeed>>(
      `supporter/feed?$page=${page}&per_page=${perPage}`,
    )
  },
}
