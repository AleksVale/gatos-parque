import { DataTableColumnHeader } from '@/components/DataTableColumnHeader'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IFeed } from '@/interfaces/feed'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function useColumsFeed() {
  const navigate = useNavigate()
  const columns: ColumnDef<IFeed>[] = [
    {
      accessorKey: 'title',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Título" />
      ),
    },
    {
      accessorKey: 'description',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Descrição" />
      ),
    },
    {
      accessorKey: 'user.firstName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Criado por" />
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
                    Editar Feed
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        )
      },
    },
  ]

  return { columns }
}
