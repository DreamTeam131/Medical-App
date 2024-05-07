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
        <Text style={styles.formHeader}>Schedule a New Appointment</Text>
        <TextInput
          style={styles.input}
          placeholder='Date (2024-05-02)'
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder='Time (5:00)'
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Appointment Description'
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title='Submit' onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formHeader: {
    textDecorationLine: 'underline',
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
