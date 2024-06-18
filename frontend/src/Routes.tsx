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
import { ListAdoption } from './pages/admin/Adoption/list'
import { ListVoluntary } from './pages/admin/Voluntary/list'
import { EditRoute } from './pages/admin/Routes/edit'
import { ListRoute } from './pages/admin/Routes/list'
import { CreateRoute } from './pages/admin/Routes/new'
import { EditPoint } from './pages/admin/Point/edit'
import { CreatePoint } from './pages/admin/Point/new'
import { ListPoint } from './pages/admin/Point'
import { RequestVoluntary } from './pages/RequestVoluntary'
import ThankYouPage from './pages/Obrigado'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <RequestVoluntary /> },
      { path: '/obrigado', element: <ThankYouPage /> },
      { path: '/login', element: <SignIn /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: ROUTES.users, element: <ListUser /> },
      { path: ROUTES.createUser, element: <CreateUser /> },
      { path: ROUTES.cats, element: <ListCat /> },
      { path: ROUTES.adoption, element: <ListAdoption /> },
      { path: ROUTES.voluntary, element: <ListVoluntary /> },
      { path: ROUTES.createCat, element: <CreateCat /> },
      { path: 'users/:id/e', element: <EditUser /> },
      { path: ROUTES.feed, element: <Feed /> },
      { path: ROUTES.createFeed, element: <CreateFeed /> },
      { path: 'feed/:id/e', element: <EditFeed /> },
      { path: 'cats/:id/e', element: <EditCat /> },
      { path: ROUTES.routes, element: <ListRoute /> },
      { path: ROUTES.createRoute, element: <CreateRoute /> },
      { path: 'routes/:id/e', element: <EditRoute /> },
      { path: ROUTES.point, element: <ListPoint /> },
      { path: ROUTES.createPoint, element: <CreatePoint /> },
      { path: 'points/:id/e', element: <EditPoint /> },
    ],
  },
])
