import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { signInSchema, TSignInForm } from './validation'
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
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { ROLES } from '@/constants/roles'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Logo.png'

export function SignIn() {
  const navigate = useNavigate()
  const form = useForm<TSignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { login } = useAuth()
  const { t } = useTranslation()

  async function onSubmit(values: TSignInForm): Promise<void> {
    try {
      const role = await login(values.email, values.password)
      if (role === ROLES.admin) {
        navigate(ROUTES.home)
      } else {
        toast.error(
          'Você não tem permissão para acessar essa área, baixe nosso aplicativo!',
        )
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
    <div className="w-1/3">
      <Helmet title="Login" />
      <section className="px-4 py-2 bg-secondary rounded w-full">
        <img src={logo} width={200} className="mx-auto" alt="" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Form.Email')}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Form.Password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('Form.Password')}
                      {...field}
                    />
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
