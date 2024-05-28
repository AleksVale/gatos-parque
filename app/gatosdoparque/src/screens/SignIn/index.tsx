import React from 'react'
import { Button, ButtonText, Container, Link, Title } from './styles'
import { AuthHeader } from '../../components/AuthHeader'
import { z } from 'zod'
import { useAuth } from '../../hooks/useAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from '../../components/Input'
import { PasswordInput } from '../../components/Input/Password'
import { Toast } from 'toastify-react-native'

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type SignInFormData = z.infer<typeof schema>

export const SignIn: React.FC = () => {
  const { login } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleLogin = async (data: SignInFormData) => {
    try {
      await login(data.email, data.password)
    } catch (err) {
      console.log(JSON.stringify(err))
      Toast.error('Erro ao fazer login', 'top')
    }
  }

  return (
    <>
      <AuthHeader />
      <Container>
        <Title>Entrar</Title>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              placeholder="E-mail"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
            />
          )}
        />
        <Button onPress={handleSubmit(handleLogin)}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Link>Criar conta</Link>
      </Container>
    </>
  )
}
