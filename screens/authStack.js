import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen } from './User Login/SplashScreen'
import { LoginScreen } from './User Login/LoginScreen'
import { CreateAccountScreen } from './User Login/CreateAccountScreen'
import { ForgotPasswordScreen } from './User Login/ForgotPasswordScreen'
import * as Linking from 'expo-linking'

const AuthStack = createNativeStackNavigator()

export function AuthScreenStack({ navigation }) {
  const [data, setData] = useState(null)

  function handleDeepLink(event) {
    let data = Linking.parse(event.url)
    setData(data)
  }

  useEffect(() => {
    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL()
      if (!initialURL) setData(Linking.parse(initialURL))
    }

    Linking.addEventListener('url', handleDeepLink)
    if (!data) {
      getInitialURL
    }
    /*
    return () => {
      this.Linking.remove('url')
    }*/
  }, [])

  return (
    <AuthStack.Navigator initialRouteName='SplashScreen'>
      <AuthStack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='CreateAccountScreen'
        component={CreateAccountScreen}
        options={{ headerBackTitle: 'Login', title: '' }}
      />
      <AuthStack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
        options={{ headerBackTitle: 'Login', title: '' }}
      />
    </AuthStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
