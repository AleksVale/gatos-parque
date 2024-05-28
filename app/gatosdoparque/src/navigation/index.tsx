// Imports react
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Home } from '../screens/Home'
import { Cat } from '../screens/Cat'
import { SignIn } from '../screens/SignIn'
import { useAuth } from '../hooks/useAuth'

const Stack = createNativeStackNavigator()

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

const AuthStack = createNativeStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
)

const Tab = createBottomTabNavigator()

const Navigation: React.FC = (): JSX.Element => {
  const { token } = useAuth()

  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Cat" component={Cat} />
        </Tab.Navigator>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  )
}

export default Navigation
