import { IRootStackParamList } from '../Interfaces/NavigationInterface'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
