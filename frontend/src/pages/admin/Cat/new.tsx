import { CatStatus } from '@/interfaces/cat'
import { TCreateCatSchema, createCatSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CatService } from '@/services/CatService'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { CreateEditCatForm } from './components/CreateEditCatForm'

export function CreateCat() {
  const navigate = useNavigate()
  const form = useForm<TCreateCatSchema>({
    resolver: zodResolver(createCatSchema),
    defaultValues: {
      name: '',
      age: 0,
      description: '',
      status: CatStatus.ACTIVE,
    },
  })

  async function onSubmit(values: TCreateCatSchema): Promise<void> {
    try {
      const response = await CatService.create(values)
      if (response.data.success) {
        toast.success('Gato criado com sucesso')
        navigate(ROUTES.cats)
      }
    } catch (err) {
      toast.error(
        isAxiosError(err) ? err.response?.data.message : 'Erro interno',
      )
    }
  }
  return (
    <div>
      <CreateEditCatForm form={form} onSubmitForm={onSubmit} />
    </div>
  )
}
