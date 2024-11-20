import { DataTableColumnHeader } from '@/components/DataTableColumnHeader'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'

import { IVoluntary, RequestStatus } from '@/interfaces/voluntary'
import { ColumnDef } from '@tanstack/react-table'
import { CircleX, CircleCheck, Eye } from 'lucide-react'
import { VoluntaryService } from '../../../services/VoluntaryService'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PaginationMeta } from '@/services/interfaces'
import { DEFAULT_META_PAGINATION } from '@/constants/routes'
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { VoluntaryInfo } from '@/components/VoluntaryInfo'

dayjs.extend(utc)

enum RequestLabel {
  PENDING = 'Pendente',
  APPROVED = 'Aprovado',
  REJECTED = 'Rejeitado',
}

export function useColumsVoluntary() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IVoluntary[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchVoluntarys = useCallback(async () => {
    const response = await VoluntaryService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchVoluntarys()
  }, [fetchVoluntarys])

  async function handleAcceptVoluntary(id: string) {
    const response = await VoluntaryService.update(id.toString(), {
      status: RequestStatus.APPROVED,
    })
    if (response.data.success) {
      fetchVoluntarys()
      toast.success('Voluntário aprovado com sucesso')
    }
  }
  async function handleRejectVoluntary(id: string) {
    const response = await VoluntaryService.update(id.toString(), {
      status: RequestStatus.REJECTED,
    })
    if (response.data.success) {
      fetchVoluntarys()
      toast.success('Voluntário rejeitado com sucesso')
    }
  }

  const columns: ColumnDef<IVoluntary>[] = [
    {
      id: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Voluntário" />
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
      accessorKey: 'dateOfBirth',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Data de nascimento" />
      ),
      accessorFn: (row) =>
        dayjs(row.dateOfBirth).utc(false).format('DD/MM/YYYY'),
    },
    {
      accessorKey: 'document',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Documento" />
      ),
    },
    {
      accessorKey: 'createdAt',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Solicitado em" />
      ),
      accessorFn: (row) => dayjs(row.createdAt).utc(false).format('DD/MM/YYYY'),
    },
    {
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      accessorFn: (row) => RequestLabel[row.status],
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        const voluntary = row.original
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Eye size={16} className="mr-2" />
                <span> Visualizar Informações</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  Informações do voluntário
                </DialogTitle>
              </DialogHeader>
              <fieldset disabled>
                <div className="flex flex-col space-y-4">
                  <VoluntaryInfo
                    label="Nome"
                    value={`${voluntary.firstName} ${voluntary.lastName}`}
                  />
                  <VoluntaryInfo
                    label="Data de Nascimento"
                    value={dayjs(voluntary.dateOfBirth)
                      .utc(false)
                      .format('DD/MM/YYYY')}
                  />
                  <VoluntaryInfo label="Documento" value={voluntary.document} />
                  <VoluntaryInfo label="Razão" value={voluntary.reason} />
                  <VoluntaryInfo
                    label="Endereço"
                    value={voluntary.addressId ?? 'Não informado'}
                  />
                  <VoluntaryInfo
                    label="Status"
                    value={RequestLabel[voluntary.status]}
                  />
                  <VoluntaryInfo
                    label="Solicitado em"
                    value={dayjs(voluntary.createdAt)
                      .utc(false)
                      .format('DD/MM/YYYY')}
                  />
                </div>
              </fieldset>
              <DialogFooter>
                <DialogClose className="flex gap-3">
                  <Button
                    onClick={() => handleRejectVoluntary(voluntary.id)}
                    className="gap-1"
                    variant={'destructive'}
                    disabled={voluntary.status === RequestStatus.REJECTED}
                  >
                    <CircleX size={16} />
                    <span>Recusar</span>
                  </Button>
                  <Button
                    onClick={() => handleAcceptVoluntary(voluntary.id)}
                    className="gap-1"
                    variant={'default'}
                    disabled={voluntary.status === RequestStatus.APPROVED}
                  >
                    <CircleCheck size={16} />
                    <span>Aprovar</span>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )
      },
    },
  ]

  return { columns, data, meta }
}
