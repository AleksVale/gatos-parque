import { DataTable } from '@/components/DataTable'
import { useColumsPoint } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'
import { ROUTES } from '@/constants/routes'

export function ListPoint() {
  const { columns, data, meta } = useColumsPoint()

  return (
    <div>
      <Helmet title="Point" />
      <Headerbutton
        label="Lista de Pontos"
        navigateTo={ROUTES.createPoint}
        showButton
        labelButton="Novo Ponto"
      />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
