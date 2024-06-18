import { DataTable } from '@/components/DataTable'
import { DEFAULT_META_PAGINATION, ROUTES } from '@/constants/routes'
import { PaginationMeta } from '@/services/interfaces'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useColumsRoute } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'
import { IRoute } from '@/interfaces/route'
import { RouteService } from '@/services/RouteService'

export function ListRoute() {
  const { columns } = useColumsRoute()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IRoute[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchRoutes = useCallback(async () => {
    const response = await RouteService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchRoutes()
  }, [fetchRoutes])
  return (
    <div>
      <Helmet title="Rotas" />
      <Headerbutton
        label="Lista de rotas"
        navigateTo={ROUTES.createRoute}
        showButton
        labelButton="Nova rota"
      />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
