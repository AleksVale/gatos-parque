import { DataTable } from '@/components/DataTable'
import { DEFAULT_META_PAGINATION, ROUTES } from '@/constants/routes'
import { PaginationMeta } from '@/services/interfaces'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useColumsFeed } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'
import { IFeed } from '@/interfaces/feed'
import { FeedService } from '@/services/FeedService'

export function Feed() {
  const { columns } = useColumsFeed()
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
  return (
    <div>
      <Helmet title="Feed" />
      <Headerbutton
        label="Lista de feeds"
        navigateTo={ROUTES.createFeed}
        showButton
        labelButton="Novo Feed"
      />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
