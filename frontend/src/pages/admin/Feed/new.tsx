import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createFeedSchema, TCreateFeedSchema } from './validation'
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
import { FeedService } from '@/services/FeedService'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { useGoBack } from '@/hooks/useGoBack'

export function CreateFeed() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { goBack } = useGoBack()

  const form = useForm<TCreateFeedSchema>({
    resolver: zodResolver(createFeedSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  async function onSubmit(values: TCreateFeedSchema): Promise<void> {
    try {
      const response = await FeedService.create(values);
      if (response.data.success) {
        toast.success('Postagem criada com sucesso.')
        navigate(ROUTES.feed)
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full bg-secondary p-4 rounded"
        >
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant={'destructive'} type='button' onClick={goBack}>Cancelar</Button>
            <Button type='submit'>Criar</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
