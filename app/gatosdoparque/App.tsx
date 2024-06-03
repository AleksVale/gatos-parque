import React from 'react'
import Navigation from './src/navigation'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/styles/themes/default'
import { AuthProvider } from './src/context/Auth'
import ToastManager from 'toastify-react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <ToastManager />
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
