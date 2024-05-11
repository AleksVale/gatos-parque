import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createUserSchema, TCreateUserSchema } from './validation'
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
import { doocumentMask, phoneMask } from '@/lib/mask'
import { useMaskito } from '@maskito/react'

export function CreateFeed() {
  const { t } = useTranslation()

  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      title: '',
      description: '',
      photoKey: '',
      document: '',
    },
  })

  async function onSubmit(values: TCreateUserSchema): Promise<void> {
    try {
      console.log(values)
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
            <Button variant={'destructive'}>Cancelar</Button>
            <Button>Criar</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
