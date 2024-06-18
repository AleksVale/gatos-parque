export interface IPoint {
  createdAt: string
  id: number
  name: string
  reference: string
  updatedAt: string
}

export interface IRoutePointResponseDto {
  routeId: number
  pointId: number
  checkin: boolean
  point: IPoint
}

export interface IRouteResponseDto {
  id: number
  name: string
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
  RoutePoint: IRoutePointResponseDto[]
}
