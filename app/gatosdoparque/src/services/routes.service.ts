import { PhotoFile } from 'react-native-vision-camera'
import { IRouteResponseDto } from '../Interfaces/IRoutes'
import { PaginatedResponseDto } from '../Interfaces/Pagination'
import http from '../utils/http'

export const RouteService = {
  getAllRoutes: async (page: number, perPage: number) => {
    return http.get<PaginatedResponseDto<IRouteResponseDto>>(
      `supporter/routes?$page=${page}&per_page=${perPage}`,
    )
  },
  checkIn: async (routeId: number, pointId: number) => {
    return http.post<{ success: boolean }>('supporter/routes', {
      routeId,
      pointId,
    })
  },
  checkInPhoto: async (routeId: number, pointId: number, photo: PhotoFile) => {
    const uri = `file://${photo.path}`
    const response = await fetch(uri)
    const blob = await response.blob()
    const formData = new FormData()
    formData.append('file', blob, 'photo.jpg')
    return http.post<{ success: boolean }>(
      `supporter/routes/${routeId}/${pointId}/file`,
      formData,
      {
        headers: {
          accept: 'application/json',
          'Content-type': 'multipart/form-data',
        },
      },
    )
  },
}
