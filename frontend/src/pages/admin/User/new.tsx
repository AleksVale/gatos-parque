import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createUserSchema, TCreateUserSchema } from './validation'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { UserStatus } from '@/interfaces/user'
import { UserService } from '@/services/UserService'
import { ROUTES } from '@/constants/routes'
import { useNavigate } from 'react-router-dom'
import { CreateEditUserForm } from './components/CreateEditForm'

export function CreateUser() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: '',
      password: '',
      dateOfBirth: '',
      firstName: '',
      lastName: '',
      roleId: '',
      document: '',
      phoneNumber: '',
      status: UserStatus.ACTIVE,
    },
  })

  async function onSubmit(values: TCreateUserSchema): Promise<void> {
    try {
      const response = await UserService.create(values)
      if (response.data.success) {
        toast.success('Usuário criado com sucesso')
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

  return (
    <div>
      <CreateEditUserForm form={form} onSubmitForm={onSubmit} />
    </div>
  )
}
