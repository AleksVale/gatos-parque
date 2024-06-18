import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createPointSchema, TCreatePointSchema } from './validation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { PointService } from '@/services/PointService'
import { ROUTES } from '@/constants/routes'
import { useGoBack } from '@/hooks/useGoBack'

export function EditPoint() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { goBack } = useGoBack()

  const form = useForm<TCreatePointSchema>({
    resolver: zodResolver(createPointSchema),
    defaultValues: {
      name: '',
      reference: '',
    },
  })

  async function onSubmit(values: TCreatePointSchema): Promise<void> {
    try {
      const response = await PointService.update(id as string, values)
      if (response.data.success) {
        toast.success('Postagem editado com sucesso')
        navigate(ROUTES.point)
      }
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? err.response?.data.message
          : t('errors.internalError'),
      )
    }
  }

  const { reset } = form

  const getPoint = useCallback(async () => {
    try {
      const { data } = await PointService.get(id)
      reset({
        ...data,
      })
    } catch (err) {
      toast.error(
        isAxiosError(err)
          ? err.response?.data.message
          : t('errors.internalError'),
      )
    }
  }, [reset, id, t])

  useEffect(() => {
    getPoint()
  }, [getPoint])

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full bg-secondary p-4 rounded"
        >
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referência</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant={'destructive'} type="button" onClick={goBack}>
              Cancelar
            </Button>
            <Button type="submit">Criar</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
