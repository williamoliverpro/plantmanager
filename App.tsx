import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import * as Notifications from 'expo-notifications'

import Routes from './src/routes'
import { PlantProps } from './src/libs/storage'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps

        console.log(data)
      })

    return () => subscription.remove()

    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync()

    //   const data = await Notifications.getAllScheduledNotificationsAsync()
    //   console.log("Notificações agendadas")
    //   console.log(data)
    // }

    // notifications()
  }, [])

  if (!isFontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  )
}