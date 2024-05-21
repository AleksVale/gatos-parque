export const ROUTES = {
  home: '/admin',
  users: '/admin/users',
  feed: '/admin/feed',
  cats: '/admin/cats',
  createUser: '/admin/users/new',
  createCat: '/admin/cats/new',
  editUser: (id: string) => `/admin/users/${id}/e`,
  createFeed: '/admin/feed/new',
  editFeed: (id: string) => `/admin/feed/${id}/e`,
  editCat: (id: string) => `/admin/cats/${id}/e`,
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
