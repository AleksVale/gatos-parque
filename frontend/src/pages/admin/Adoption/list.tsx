import { DataTable } from '@/components/DataTable'
import { useColumsAdoption } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'

export function ListAdoption() {
  const { columns, data, meta } = useColumsAdoption()

  return (
    <div>
      <Helmet title="Adoções" />
      <Headerbutton label="Lista de adoções" />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
