import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type IRootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  HomeScreen: undefined
  Profile: undefined
  Points: undefined
  Camera: { pointId: number; routeId: number }
}

export interface ISignInScreen
  extends NativeStackScreenProps<IRootStackParamList, 'SignIn'> {}

export interface ISignUpScreen
  extends NativeStackScreenProps<IRootStackParamList, 'SignUp'> {}

export interface IHomeScreen
  extends NativeStackScreenProps<IRootStackParamList, 'HomeScreen'> {}

export interface IProfileScreen
  extends NativeStackScreenProps<IRootStackParamList, 'Profile'> {}
