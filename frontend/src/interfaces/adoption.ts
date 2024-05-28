import { ICat } from './cat'
import { IUser } from './user'

export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface IAdoption {
  id: string
  userId: string
  user: IUser
  catId: string
  cat: ICat
  addressId: string
  status: RequestStatus
}
