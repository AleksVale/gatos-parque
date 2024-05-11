import { DataTableColumnHeader } from '@/components/DataTableColumnHeader'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IUser } from '@/interfaces/user'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Edit, PhoneCall } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function useColumsUser() {
  const navigate = useNavigate()
  const columns: ColumnDef<IUser>[] = [
    {
      id: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nome" />
      ),
      cell: ({ row }) => {
        return (
          <span>
            {row.original.firstName} {row.original.lastName}
          </span>
        )
      },
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: 'role.label',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nível de acesso" />
      ),
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        const user = row.original

        return (
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigate(`admin/user/${user.id}/e`)}
                  className="group flex items-center gap-2"
                >
                  <Edit size={16} className="text-primary" />
                  <span className="group-hover:text-primary">
                    Editar usuário
                  </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to={`https://wa.me/${'11'}?text=Olá%20Colaborador`}
                    target="_blank"
                    className="group flex items-center gap-2"
                  >
                    <PhoneCall size={16} className="text-lime-500" />
                    <span className="group-hover:text-lime-500">
                      Enviar um zap
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>ola</DialogContent>
          </Dialog>
        )
      },
    },
  ]

  return { columns }
}
