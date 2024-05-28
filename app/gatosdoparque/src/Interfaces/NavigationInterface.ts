import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type IRootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  HomeScreen: undefined
}

export interface ISignInScreen
  extends NativeStackScreenProps<IRootStackParamList, 'SignIn'> {}

export interface ISignUpScreen
  extends NativeStackScreenProps<IRootStackParamList, 'SignUp'> {}

export interface IHomeScreen
  extends NativeStackScreenProps<IRootStackParamList, 'HomeScreen'> {}
