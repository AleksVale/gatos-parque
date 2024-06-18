export interface IRoutePoint {
  routeId: number
  pointId: number
  checkin: boolean
}

export interface IRoute {
  id: number
  name: string
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
  RoutePoint: IRoutePoint[]
}
