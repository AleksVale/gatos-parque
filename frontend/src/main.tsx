import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate="%s | SOS PARQUE" />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
