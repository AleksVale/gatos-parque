import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/useAuth'
import { ModeToggle } from './mode-toggle'

export function Header() {
  const { firstName, lastName } = useAuth()
  return (
    <div className="bg-secondary p-4 w-full flex justify-between items-center h-16">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        SOS Gatinhos do Parque
      </h2>
      <div className="flex gap-2">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary">
            {firstName?.charAt(0).toUpperCase()}
            {lastName?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
