import { CatStatus } from '@/interfaces/cat'
import { TCreateCatSchema, createCatSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CatService } from '@/services/CatService'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateEditCatForm } from './components/CreateEditCatForm'
import { useCallback, useEffect } from 'react'

export function EditCat() {
  const navigate = useNavigate()
  const { id } = useParams() as { id: string }
  const form = useForm<TCreateCatSchema>({
    resolver: zodResolver(createCatSchema),
    defaultValues: {
      name: '',
      age: 0,
      description: '',
      status: CatStatus.ACTIVE,
    },
  })
  const { reset } = form

  const getCat = useCallback(async () => {
    try {
      const response = await CatService.get(id)
      reset(response.data)
    } catch (err) {
      toast.error(
        isAxiosError(err) ? err.response?.data.message : 'Erro interno',
      )
    }
  }, [id, reset])

  useEffect(() => {
    getCat()
  }, [getCat])

  async function onSubmit(values: TCreateCatSchema): Promise<void> {
    try {
      const response = await CatService.update(id, values)
      if (response.data.success) {
        toast.success('Gato editado com sucesso')
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
