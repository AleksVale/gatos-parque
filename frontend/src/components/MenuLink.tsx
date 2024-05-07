import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
interface MenuLinkProps {
  to: string
  label: string
  icon?: JSX.Element
}
export function MenuLink({ to, label, icon }: Readonly<MenuLinkProps>) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={
        pathname.split('/')[2] === to.split('/')[2]?.split('?')[0]
          ? 'true'
          : 'false'
      }
      className="text-secondary-foreground hover:bg-primary hover:text-primary-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
      to={to}
    >
      {icon ?? <ChevronRight size={14} />}
      {label}
    </Link>
  )
}
