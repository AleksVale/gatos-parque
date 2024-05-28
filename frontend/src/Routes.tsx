import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './@layouts/DefaultLayout'
import { AdminLayout } from './@layouts/AdminLayout'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/admin/Home'
import { ROUTES } from './constants/routes'
import { CreateUser } from './pages/admin/User/new'
import { ListUser } from './pages/admin/User/list'
import { EditUser } from './pages/admin/User/edit'
import { Feed } from './pages/admin/Feed/'
import { CreateFeed } from './pages/admin/Feed/new'
import { EditFeed } from './pages/admin/Feed/edit'
import { ListCat } from './pages/admin/Cat/list'
import { CreateCat } from './pages/admin/Cat/new'
import { EditCat } from './pages/admin/Cat/edit'

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
      { path: ROUTES.cats, element: <ListCat /> },
      { path: ROUTES.createCat, element: <CreateCat /> },
      { path: 'users/:id/e', element: <EditUser /> },
      { path: ROUTES.feed, element: <Feed /> },
      { path: ROUTES.createFeed, element: <CreateFeed /> },
      { path: 'feed/:id/e', element: <EditFeed /> },
      { path: 'cats/:id/e', element: <EditCat /> },
    ],
  },
])
