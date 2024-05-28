import React, { useEffect, useState } from 'react'
import { Button, ButtonText, Container, Link, Title } from './styles'
import { AuthHeader } from '../../components/AuthHeader'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from '../../components/Input'
import { PasswordInput } from '../../components/Input/Password'
import { Toast } from 'toastify-react-native'
import { ISignUpScreen } from '../../Interfaces/NavigationInterface'
import { Keyboard, TouchableOpacity } from 'react-native'
import { AuthService } from '../../services/auth.service'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
  firstName: z.string().min(1, 'Nome é obrigatório'),
  lastName: z.string().min(1, 'Sobrenome é obrigatório'),
})

export type SignUpFormData = z.infer<typeof schema>

export const SignUp: React.FC<ISignUpScreen> = ({ navigation }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      await AuthService.createSupporter(data)
      Toast.success('Conta criada com sucesso', 'top')
      navigation.goBack()
    } catch (err) {
      console.log(JSON.stringify(err))
      Toast.error('Erro ao criar conta', 'top')
    }
  }

  return (
    <>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        style={{ flex: 1, backgroundColor: '#fafafa' }}
        showsVerticalScrollIndicator={false}
      >
        <AuthHeader keyboard={isKeyboardVisible} />
        <Container>
          <Title>Criar conta</Title>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder="Sobrenome"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
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
          <Button onPress={handleSubmit(handleSignUp)}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Link>Já tem conta? Entrar</Link>
          </TouchableOpacity>
        </Container>
      </KeyboardAwareScrollView>
    </>
  )
}
