import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import {
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
} from '@expo-google-fonts/lexend'

export function CreateAccountScreen({ session, navigation }) {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userInputCode, setUserInputCode] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function createAccount({ email, password }) {
    try {
      if (!validateForm()) {
        return
      }
      setLoading(true)

      let { data, error } = await supabase.auth.signUp({
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

  const validateForm = () => {
    let errors = {}

    if (userInputCode != '123') errors.userInputCode = 'Incorrect code'
    if (!email) errors.email = 'Email is required'

    var validator = require('email-validator')
    if (!validator.validate(email)) errors.email = 'Please enter a email'

    if (!password) errors.password = 'Password is required'
    if (!password) errors.confirmPassword = 'Please confirm password'
    if (password != confirmPassword)
      errors.confirmPassword = 'Password does not match'

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setUserInputCode('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setErrors({})
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <SafeAreaView>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.header}>Create Account</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Affiliation Code</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter Code'
              value={userInputCode}
              onChangeText={setUserInputCode}
            />
            {errors.userInputCode ? (
              <Text style={styles.errorText}>{errors.userInputCode}</Text>
            ) : null}
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder='email@address.com'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter Password'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.button}
              onPress={() => createAccount({ email, password })}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
    marginBottom: 50,
  },
  form: {
    backgroundColor: 'white',
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
  header: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'Lexend_500Medium',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Lexend_500Medium',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#c9fbef',
    fontFamily: 'Lexend_400Regular',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontFamily: 'Lexend_300Light',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0ee3ae',
    paddingVertical: 10,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Lexend_400Regular',
    color: '#fff',
  },
})
