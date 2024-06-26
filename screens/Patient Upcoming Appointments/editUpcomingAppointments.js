import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'

export function AppointmentForm({ navigation, appointmentId = null }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (appointmentId) {
      setIsEditMode(true)
      //backend API:
      //fetch(`https://yourapi.com/api/appointments/${appointmentId}`)
      //.then(response => response.json())
      //.then(data => {

      // For demo:
      setDate('2024-05-02')
      setTime('2:00 pm')
      setDescription('Physical and Vaccine check-up')
    }
  }, [appointmentId])

  const handleSubmit = () => {
    console.log('Updating Appointment:', { date, time, description })
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.formHeader}>Edit Appointment</Text>
        <TextInput
          style={styles.input}
          placeholder='Date (2024-05-03)'
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder='Time (4:00 pm)'
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder='This is the description'
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
