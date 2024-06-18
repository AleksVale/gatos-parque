import { TCreateRouteSchema, createRouteSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { CreateEditRouteForm } from './components/CreateEditRouteForm'
import { RouteService } from '@/services/RouteService'

export function CreateRoute() {
  const navigate = useNavigate()
  const form = useForm<TCreateRouteSchema>({
    resolver: zodResolver(createRouteSchema),
    defaultValues: {
      name: '',
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      points: [],
    },
  })

  async function onSubmit(values: TCreateRouteSchema): Promise<void> {
    try {
      const points = values.points.map((point) => point.id)
      const response = await RouteService.create({ ...values, points })
      if (response.data.success) {
        toast.success('Gato criado com sucesso')
        navigate(ROUTES.routes)
      }
    } catch (err) {
      toast.error(
        isAxiosError(err) ? err.response?.data.message : 'Erro interno',
      )
    }
  }
  return (
    <div>
      <CreateEditRouteForm
        form={form}
        onSubmitForm={onSubmit}
        pointsForm={[]}
      />
    </div>
  )
}
