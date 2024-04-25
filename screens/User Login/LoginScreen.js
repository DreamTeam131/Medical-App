import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  AppState,
  Alert,
  TouchableOpacity,
  TouchableOpacityComponent,
} from 'react-native'
import { supabase } from '../../lib/supabase'
import { ForgotPasswordScreen } from './ForgotPasswordScreen'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  async function signInWithEmail({ email, password }) {
    console.log(email)
    console.log(password)
    try {
      if (!validateForm()) {
        return
      }
      setLoading(true)

      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setErrors({})
    setLoading(false)
  }

  const validateForm = () => {
    let errors = {}

    if (!email) errors.email = 'Email is required'
    if (!password) errors.password = 'Password is required'

    var validator = require('email-validator')
    if (!validator.validate(email)) errors.email = 'Please enter a valid email'

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder='email@address.com'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            label='email'
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => signInWithEmail({ email, password })}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen')
              resetForm()
            }}
          >
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => signInWithEmail({ email, password })}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateAccountScreen')}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#0ee3ae',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Lexend_500Medium',
  },
  input: {
    height: 40,
    //borderColor: '#ddd',
    //borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Lexend_400Regular',
    backgroundColor: '#c9fbef',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontFamily: 'Lexend_300Light',
  },
  forgotButton: {
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loginButton: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0ee3ae',
    paddingVertical: 10,
    marginBottom: 10,
  },
  createButton: {
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#0ee3ae',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Lexend_400Regular',
    color: '#fff',
  },
  forgotText: {
    fontSize: 16,
    fontFamily: 'Lexend_400Regular',
    color: '#0ee3ae',
  },
})
