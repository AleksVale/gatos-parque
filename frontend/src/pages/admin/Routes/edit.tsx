import { TCreateRouteSchema, createRouteSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateEditRouteForm } from './components/CreateEditRouteForm'
import { useCallback, useEffect, useState } from 'react'
import { RouteService } from '@/services/RouteService'

export function EditRoute() {
  const navigate = useNavigate()
  const { id } = useParams() as { id: string }
  const [points, setPoints] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
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
  const { reset } = form

  const getRoute = useCallback(async () => {
    try {
      setLoading(true)
      const response = await RouteService.get(id)
      const pointsMap = response.data.RoutePoint.map((point) => point.pointId)
      setPoints(pointsMap)
      reset({ ...response.data, points: [] })
    } catch (err) {
      toast.error(
        isAxiosError(err) ? err.response?.data.message : 'Erro interno',
      )
    } finally {
      setLoading(false)
    }
  }, [id, reset])

  useEffect(() => {
    getRoute()
  }, [getRoute])

  async function onSubmit(values: TCreateRouteSchema): Promise<void> {
    try {
      const response = await RouteService.update(id, { ...values, points: [] })
      if (response.data.success) {
        toast.success('Gato editado com sucesso')
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
      {!loading && (
        <CreateEditRouteForm
          form={form}
          onSubmitForm={onSubmit}
          pointsForm={points}
        />
      )}
    </div>
  )
}
