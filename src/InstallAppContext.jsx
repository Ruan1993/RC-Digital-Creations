import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const InstallAppContext = createContext(null)

function isStandaloneMode() {
  return window.matchMedia?.('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
}

export function InstallAppProvider({ children }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [installed, setInstalled] = useState(() =>
    typeof window !== 'undefined' ? isStandaloneMode() : false
  )
  const [isIos, setIsIos] = useState(() =>
    typeof window !== 'undefined' ? isIosDevice() : false
  )

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }

    const onInstalled = () => {
      setInstalled(true)
      setDeferredPrompt(null)
    }

    const onDisplayModeChange = () => setInstalled(isStandaloneMode())

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)
    const media = window.matchMedia?.('(display-mode: standalone)')
    media?.addEventListener?.('change', onDisplayModeChange)

    setIsIos(isIosDevice())
    setInstalled(isStandaloneMode())

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
      media?.removeEventListener?.('change', onDisplayModeChange)
    }
  }, [])

  const installApp = useCallback(async () => {
    if (installed) return { outcome: 'installed' }

    if (deferredPrompt) {
      deferredPrompt.prompt()
      const choice = await deferredPrompt.userChoice
      if (choice?.outcome === 'accepted') {
        setDeferredPrompt(null)
      }
      return choice
    }

    if (isIos) {
      window.alert('To install RC Digital Creations on iPhone or iPad: tap Share in Safari, then choose “Add to Home Screen”.')
      return { outcome: 'ios-instructions' }
    }

    window.alert('To install RC Digital Creations, open your browser menu and choose “Install app” or “Add to Home screen”.')
    return { outcome: 'browser-instructions' }
  }, [deferredPrompt, installed, isIos])

  const value = useMemo(() => ({
    canInstall: !installed,
    installed,
    isIos,
    installApp
  }), [installed, isIos, installApp])

  return (
    <InstallAppContext.Provider value={value}>
      {children}
    </InstallAppContext.Provider>
  )
}

export function useInstallApp() {
  const context = useContext(InstallAppContext)
  if (!context) throw new Error('useInstallApp must be used within InstallAppProvider')
  return context
}
