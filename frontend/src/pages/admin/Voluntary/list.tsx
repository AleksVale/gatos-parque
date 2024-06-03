import { DataTable } from '@/components/DataTable'
import { useColumsVoluntary } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'

export function ListVoluntary() {
  const { columns, data, meta } = useColumsVoluntary()

  return (
    <div>
      <Helmet title="Voluntários" />
      <Headerbutton label="Lista de voluntários" />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
