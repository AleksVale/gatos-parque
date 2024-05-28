import { DataTable } from '@/components/DataTable'
import { useColumsFeed } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'
import { ROUTES } from '@/constants/routes'

export function Feed() {
  const { columns, data, meta } = useColumsFeed()

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
