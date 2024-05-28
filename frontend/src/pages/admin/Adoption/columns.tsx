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
import { IAdoption, RequestStatus } from '@/interfaces/adoption'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, CircleX, CircleCheck } from 'lucide-react'
import { AdoptionService } from '../../../services/AdoptionService'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PaginationMeta } from '@/services/interfaces'
import { DEFAULT_META_PAGINATION } from '@/constants/routes'

export function useColumsAdoption() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IAdoption[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchAdoptions = useCallback(async () => {
    const response = await AdoptionService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchAdoptions()
  }, [fetchAdoptions])

  async function handleAcceptAdoption(id: string) {
    const response = await AdoptionService.update(id.toString(), {
      status: RequestStatus.APPROVED,
    })
    if (response.data.success) {
      fetchAdoptions()
      toast.success('Adoção aprovada com sucesso')
    }
  }
  async function handleRejectAdoption(id: string) {
    const response = await AdoptionService.update(id.toString(), {
      status: RequestStatus.REJECTED,
    })
    if (response.data.success) {
      fetchAdoptions()
      toast.success('Adoção rejeitada com sucesso')
    }
  }

  const columns: ColumnDef<IAdoption>[] = [
    {
      accessorKey: 'adopter',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Adotante" />
      ),
    },
    {
      accessorKey: 'cat',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Gato" />
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
                  onClick={() => handleAcceptAdoption(cat.id)}
                  className="group flex items-center gap-2"
                >
                  <CircleCheck size={16} className="text-primary" />
                  <span className="group-hover:text-primary">Aprovar</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleRejectAdoption(cat.id)}
                  className="group flex items-center gap-2 "
                >
                  <CircleX size={16} className="text-destructive" />
                  <span className="group-hover:text-destructive">Recusar</span>
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

  return { columns, data, meta }
}
