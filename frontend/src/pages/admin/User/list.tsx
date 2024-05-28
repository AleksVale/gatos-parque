import { DataTable } from '@/components/DataTable'
import { DEFAULT_META_PAGINATION, ROUTES } from '@/constants/routes'
import { IUser } from '@/interfaces/user'
import { PaginationMeta } from '@/services/interfaces'
import { UserService } from '@/services/UserService'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useColumsUser } from './columns'
import { Helmet } from 'react-helmet-async'
import { Headerbutton } from '@/components/HeaderButton'

export function ListUser() {
  const { columns } = useColumsUser()
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IUser[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const fetchUsers = useCallback(async () => {
    const response = await UserService.list(searchParams)
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [searchParams])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <div>
      <Helmet title="Usuários" />
      <Headerbutton
        label="Lista de usuários"
        navigateTo={ROUTES.createUser}
        showButton
        labelButton="Novo usuário"
      />
      <DataTable data={data} meta={meta} columns={columns} />
    </div>
  )
}
