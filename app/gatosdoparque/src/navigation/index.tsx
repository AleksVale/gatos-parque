// Imports react
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Home } from '../screens/Home'
import { Cat } from '../screens/Cat'
import { SignIn } from '../screens/SignIn'
import { useAuth } from '../hooks/useAuth'
import { SignUp } from '../screens/SignUp'
import { IRootStackParamList } from '../Interfaces/NavigationInterface'
import { Profile } from '../screens/Profile'
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createNativeStackNavigator<IRootStackParamList>()

const HomeStack = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomeScreen"
  >
    <Stack.Screen name="HomeScreen" component={Home} />
  </Stack.Navigator>
)

const AuthStack = createNativeStackNavigator<IRootStackParamList>()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
)

const Tab = createBottomTabNavigator()

const Navigation: React.FC = (): JSX.Element => {
  const { token } = useAuth()

  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'HomeScreen') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person' : 'person-outline'
              } else if (route.name === 'Gatos') {
                iconName = focused ? 'paw' : 'paw-outline'
              }

              return (
                <Ionicons
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={(iconName as any) ?? 'home'}
                  size={size}
                  color={color}
                />
              )
            },
            tabBarActiveTintColor: '#0b4f3a',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Gatos" component={Cat} />
          <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  )
}

export default Navigation
