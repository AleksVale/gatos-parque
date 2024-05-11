import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'
import { DataTablePagination } from './DataTablePagination'
import { useSearchParams } from 'react-router-dom'
import { PaginationMeta } from '@/services/interfaces'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  meta: PaginationMeta
}

export function DataTable<TData, TValue>({
  columns,
  data,
  meta,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [, setSeachParams] = useSearchParams()

  const onPageChange = (pageNumber: number) => {
    setSeachParams((prevParams) => {
      const currentPage = Number(prevParams.get('page')) || 1
      const newPage = currentPage + pageNumber

      if (newPage >= 1 && newPage <= meta.lastPage) {
        const newParams = new URLSearchParams(prevParams)
        newParams.set('page', newPage.toString())
        return newParams
      }

      // If the new page is out of bounds, return the original params
      return prevParams
    })
  }
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    pageCount: meta.lastPage,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination: {
        pageIndex: meta.currentPage - 1,
        pageSize: meta.perPage,
      },
    },
  })

  return (
    <div className="flex min-h-96 max-h-svh min-w-0 flex-col justify-between rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="border-background-foreground border-t py-4">
        <DataTablePagination
          table={table}
          onPageChange={onPageChange}
          maxPage={meta.lastPage}
        />
      </div>
    </div>
  )
}
