import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'

export function NewAppointment({ navigation, appointmentId = null }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    console.log('Creating New Appointment:', { date, time, description })
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Schedule Appointment</Text>
        </View>
        <View style={styles.form}>
          <Form
            placeholder='Date (2024-05-02)'
            value={date}
            onChangeText={setDate}
          />

          <Form placeholder='Time (5:00)' value={time} onChangeText={setTime} />
          <Form
            placeholder='Enter Appointment Description'
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <SubmitButton onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    paddingVertical: 10,
    fontFamily: 'Lexend_500Medium',
    marginLeft: 24,
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginBottom: 10,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#0ee3ae',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    marginHorizontal: 10,
  },
})
