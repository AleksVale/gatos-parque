import { Header } from '@/components/Header'
import { MenuLink } from '@/components/MenuLink'
import { ROUTES } from '@/constants/routes'
import { Cat, Home, UserCircle } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AdminLayout() {
  return (
    <div className="h-screen bg-background w-screen flex">
      <nav className="h-screen bg-secondary border-r border-primary w-44 text-center">
        <div className="h-10 border-b border-primary my-6">ADMIN</div>
        <div className="space-y-4 mx-2">
          <MenuLink icon={<Home />} label="Home" to={ROUTES.home} />
          <MenuLink icon={<UserCircle />} label="Usuários" to={ROUTES.users} />
          <MenuLink icon={<Cat />} label="Gatos" to={ROUTES.cats} />
        </div>
      </nav>
      <div className="w-full">
        <header>
          <Header />
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
