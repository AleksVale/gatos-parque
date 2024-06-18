export const ROUTES = {
  home: '/admin',
  users: '/admin/users',
  feed: '/admin/feed',
  cats: '/admin/cats',
  routes: '/admin/routes',
  adoption: '/admin/adoption',
  point: '/admin/points',
  voluntary: '/admin/voluntary',
  createPoint: '/admin/points/new',
  createUser: '/admin/users/new',
  createFeed: '/admin/feed/new',
  createCat: '/admin/cats/new',
  createRoute: '/admin/routes/new',
  editUser: (id: string) => `/admin/users/${id}/e`,
  editFeed: (id: string) => `/admin/feed/${id}/e`,
  editCat: (id: string) => `/admin/cats/${id}/e`,
  editRoute: (id: string) => `/admin/routes/${id}/e`,
  editPoint: (id: string) => `/admin/points/${id}/e`,
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
