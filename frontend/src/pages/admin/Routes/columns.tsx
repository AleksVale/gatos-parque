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
import { ROUTES } from '@/constants/routes'
import { IRoute } from '@/interfaces/route'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function useColumsRoute() {
  const navigate = useNavigate()
  const columns: ColumnDef<IRoute>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nome" />
      ),
    },
    {
      accessorKey: 'monday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Segunda-feira" />
      ),
      cell: ({ row }) => (row.original.monday ? 'X' : '[]'),
    },
    {
      accessorKey: 'tuesday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Terça-feira" />
      ),
      cell: ({ row }) => (row.original.tuesday ? 'X' : '[]'),
    },
    {
      accessorKey: 'wednesday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Quarta-feira" />
      ),
      cell: ({ row }) => (row.original.wednesday ? 'X' : '[]'),
    },
    {
      accessorKey: 'thursday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Quinta-feira" />
      ),
      cell: ({ row }) => (row.original.thursday ? 'X' : '[]'),
    },
    {
      accessorKey: 'friday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Sexta-feira" />
      ),
      cell: ({ row }) => (row.original.friday ? 'X' : '[]'),
    },
    {
      accessorKey: 'saturday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Sábado" />
      ),
      cell: ({ row }) => (row.original.saturday ? 'X' : '[]'),
    },
    {
      accessorKey: 'sunday',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Domingo" />
      ),
      cell: ({ row }) => (row.original.sunday ? 'X' : '[]'),
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const route = row.original

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
                  onClick={() => navigate(ROUTES.editRoute(`${route.id}`))}
                  className="group flex items-center gap-2"
                >
                  <Edit size={16} className="text-primary" />
                  <span className="group-hover:text-primary">Editar rota</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
