export enum CatStatus {
  ACTIVE = 'ACTIVE',
  ADOPTED = 'ADOPTED',
  DISABLED = 'DISABLED',
}

export interface ICat {
  id: string
  name: string
  age: number
  description: string
  status: CatStatus
}
