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
import { FeedService } from '@/services/FeedService'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, Edit, CirclePower } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'
import { PaginationMeta } from '@/services/interfaces'
import { DEFAULT_META_PAGINATION } from '@/constants/routes'

export function useColumsFeed() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IFeed[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchFeed = useCallback(async () => {
    const response = await FeedService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchFeed()
  }, [fetchFeed])

  async function changeStatus(id: string): Promise<void> {
    try {
      const response = await FeedService.updateStatus(id)
      if (response.data.success) {
        toast.success('Status da postagem alterado com sucesso.')
        fetchFeed()
      }
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? err.response?.data.message
          : t('errors.internalError'),
      )
    }
  }

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
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        return <div>{row.original.status ? 'Ativo' : 'Inativo'}</div>
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const feed = row.original

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
                  onClick={() => navigate(`/admin/feed/${feed.id}/e`)}
                  className="group flex items-center gap-2"
                >
                  <Edit size={16} className="text-primary" />
                  <span className="group-hover:text-primary">
                    Editar Postagem
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeStatus(feed.id)}
                  className="group flex items-center gap-2"
                >
                  <CirclePower size={16} className="text-destructive" />
                  <span className="group-hover:text-primary">
                    Alterar Status Postagem
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        )
      },
    },
  ]

  return { columns, data, meta }
}
