import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { TCreateVoluntaryForm, createVoluntarySchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
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
import logo from '../../assets/Logo.png'
import { Headerbutton } from '@/components/HeaderButton'
import { UserCheck } from 'lucide-react'
import { VoluntaryService } from '@/services/VoluntaryService'
import { useNavigate } from 'react-router-dom'

export function RequestVoluntary() {
  const navigate = useNavigate()
  const form = useForm<TCreateVoluntaryForm>({
    resolver: zodResolver(createVoluntarySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      document: '',
      reason: '',
      photoKey: null,
    },
  })

  const { t } = useTranslation()

  async function onSubmit(values: TCreateVoluntaryForm): Promise<void> {
    try {
      const response = await VoluntaryService.create(values)
      if (response.data.success) {
        navigate('/obrigado')
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
    <div className="w-full p-4 mt-14 md:w-1/3 md:mt-0">
      <Helmet title="Voluntário" />
      <Headerbutton
        label="Solicitação de voluntário"
        navigateTo="/login"
        icon={<UserCheck />}
        labelButton="Fazer login"
        showButton
      />
      <section className="px-4 py-2 bg-secondary rounded w-full">
        <img src={logo} width={200} className="mx-auto" alt="" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Sobrenome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Data de Nascimento"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Documento</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Documento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivo</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Motivo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Button>{t('Form.Enter')}</Button>
            </div>
          </form>
        </Form>
      </section>
    </div>
  )
}
