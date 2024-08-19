import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Lexend-Regular': require('@assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Light': require('@assets/fonts/Lexend-Light.ttf'),
    'Lexend-Bold': require('@assets/fonts/Lexend-Medium.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
