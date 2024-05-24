// Imports react
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Home } from '../screens/Home';
import { Cat } from '../screens/Cat';

const Stack = createNativeStackNavigator();

const HomeStack  = (): JSX.Element => (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="HomeScreen">
         <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
)


const Tab = createBottomTabNavigator();

const Navigation: () => JSX.Element = (): JSX.Element => (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }}>   
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cat" component={Cat} />
      </Tab.Navigator>
    </NavigationContainer>
);

export default Navigation;
