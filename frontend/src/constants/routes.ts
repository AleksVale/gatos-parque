export const ROUTES = {
  home: '/admin',
  users: '/admin/users',
  createUser: '/admin/users/new',
  editUser: (id: string) => `/admin/users/${id}/e`,
}

export interface SuccessResponse {
  success: boolean
}

export interface SignedURLResponse {
  signedUrl: string
}

export const DEFAULT_META_PAGINATION = {
  currentPage: 1,
  lastPage: 1,
  next: 1,
  perPage: 10,
  prev: 1,
  total: 0,
}
