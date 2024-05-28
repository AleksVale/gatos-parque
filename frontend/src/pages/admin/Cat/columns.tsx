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
import { ICat } from '@/interfaces/cat.ts'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

enum CatsLabel {
  ACTIVE = 'Ativo',
  ADOPTED = 'Adotado',
  DISABLED = 'Desativado',
}
export function useColumsCat() {
  const navigate = useNavigate()
  const columns: ColumnDef<ICat>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nome" />
      ),
    },
    {
      accessorKey: 'age',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Idade" />
      ),
    },
    {
      accessorKey: 'description',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Descrição" />
      ),
    },
    {
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      accessorFn: (row) => CatsLabel[row.status],
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        const cat = row.original

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
                  onClick={() => navigate(ROUTES.editCat(cat.id))}
                  className="group flex items-center gap-2"
                >
                  <Edit size={16} className="text-primary" />
                  <span className="group-hover:text-primary">Editar gato</span>
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
