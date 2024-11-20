import { UserStatus } from '@/interfaces/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreateEditUserForm } from './components/CreateEditForm'
import { TCreateUserSchema, updateUserSchema } from './validation'
import { UserService } from '@/services/UserService'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { formatToDocument, formatToPhoneNumber } from '@/utils/format'

export function EditUser() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: '',
      dateOfBirth: '',
      firstName: '',
      lastName: '',
      roleId: '',
      document: '',
      phoneNumber: '',
      status: UserStatus.ACTIVE,
    },
  })

  const { reset } = form

  const getUser = useCallback(async () => {
    try {
      const { data } = await UserService.get(id)
      reset({
        ...data,
        document: formatToDocument(data.document),
        phoneNumber: formatToPhoneNumber(data.phoneNumber),
      })
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? err.response?.data.message
          : t('errors.internalError'),
      )
    }
  }, [reset, id, t])

  async function onSubmit(values: TCreateUserSchema): Promise<void> {
    try {
      const response = await UserService.update(values, id)
      if (response.data.success) {
        toast.success('Usuário editado com sucesso')
        navigate(ROUTES.users)
      }
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? err.response?.data.message
          : t('errors.internalError'),
      )
    }
  }

  useEffect(() => {
    getUser()
  }, [getUser])
  return (
    <div>
      <CreateEditUserForm form={form} onSubmitForm={onSubmit} isEdit />
    </div>
  )
}
