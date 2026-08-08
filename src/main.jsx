import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { InstallAppProvider } from './InstallAppContext.jsx'
import './react-migration.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InstallAppProvider>
      <App />
    </InstallAppProvider>
  </React.StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error)
    })
  }, { once: true })
}
