import { DataTable } from '@/components/DataTable'
import { DEFAULT_META_PAGINATION, ROUTES } from '@/constants/routes'
import { PaginationMeta } from '@/services/interfaces'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useColumsCat } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'
import { ICat } from '@/interfaces/cat'
import { CatService } from '@/services/CatService'

export function ListCat() {
  const { columns } = useColumsCat()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<ICat[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchCats = useCallback(async () => {
    const response = await CatService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchCats()
  }, [fetchCats])
  return (
    <div>
      <Helmet title="Gatos" />
      <Headerbutton
        label="Lista de gatos"
        navigateTo={ROUTES.createCat}
        showButton
        labelButton="Novo gato"
      />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
