import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { LoginScreen } from './screens/User Login/LoginScreen'
import { ResetPasswordScreen } from './screens/User Login/ResetPassword'
import {
  useFonts,
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_500Medium,
  Lexend_300Light,
} from '@expo-google-fonts/lexend'
import { HomeScreenStack } from './screens/homeStack'
import { AuthScreenStack } from './screens/authStack'
import { supabase } from './lib/supabase'

const prefix = Linking.createURL('/')

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  let [fontsLoaded, fontError] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <NavigationContainer>
      {session ? <HomeScreenStack /> : <AuthScreenStack />}
    </NavigationContainer>
  )
}
