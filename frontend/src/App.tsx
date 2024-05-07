import { RouterProvider } from 'react-router-dom'
import './globals.css'
import { router } from './Routes'
import { ThemeProvider } from './context/theme-provider'
import { AuthProvider } from './context/Auth'
import { ToastContainer } from 'react-toastify'
import './i18n/i18n'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer theme="dark" />
      </AuthProvider>
    </ThemeProvider>
  )
}
