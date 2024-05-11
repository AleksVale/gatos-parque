import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './@layouts/DefaultLayout'
import { AdminLayout } from './@layouts/AdminLayout'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/admin/Home'
import { ROUTES } from './constants/routes'
import { CreateUser } from './pages/admin/User/new'
import { ListUser } from './pages/admin/User/list'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/login', element: <SignIn /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: ROUTES.users, element: <ListUser /> },
      { path: ROUTES.createUser, element: <CreateUser /> },
    ],
  },
])
