export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

interface Role {
  id: string
  label: string
  name: string
}

export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  dateOfBirth: string
  document: string
  phoneNumber: string
  status: UserStatus
  password: string
  photoKey: string | null
  addressId: string | null
  roleId: string
  role: Role
  createdAt: Date
  updatedAt: Date
}
