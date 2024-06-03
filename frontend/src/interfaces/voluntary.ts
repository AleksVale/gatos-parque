export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface IVoluntary {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  document: string
  reason: string
  status: RequestStatus
  photoKey: string | null
  addressId: string | null
  createdAt: Date
}
