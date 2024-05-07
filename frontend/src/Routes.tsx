import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './@layouts/DefaultLayout'
import { AdminLayout } from './@layouts/AdminLayout'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/admin/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/login', element: <SignIn /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: '', element: <Home /> }],
  },
])
