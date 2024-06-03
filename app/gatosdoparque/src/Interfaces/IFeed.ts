export interface IFeed {
  status: boolean
  id: string
  title: string
  description: string
  photo_key: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
}
