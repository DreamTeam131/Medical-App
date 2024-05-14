import React from 'react'
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { supabase } from '../../lib/supabase'
import PatientCard from '../../lib/PatientCard'
import { Lexend_400Regular } from '@expo-google-fonts/lexend'

const Display = ({ navigation, route }) => {
  const { id } = route.params
  const [fetchError, setFetchError] = useState(null)
  const [patient, setPatient] = useState(null)
  useEffect(() => {
    const fetchPatient = async () => {
      const { data, error } = await supabase
        .from('patient_info')
        .select()
        .eq('id', id)

      if (error) {
        setFetchError('Could not fetch patient')
        setPatient(null)
        console.log(error)
      }
      if (data) {
        setPatient(data)
        setFetchError(null)
      }
    }
    fetchPatient()
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      {fetchError && <Text>{fetchError}</Text>}
      {patient && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DisplayMedical', { id: id })}
          >
            <Text style={styles.buttonText}>Other Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EditInfo', { id: id })}
          >
            <Text style={styles.buttonText}>Edit Patient</Text>
          </TouchableOpacity>
          {patient.map((patient) => (
            <Text key={patient.id}>
              <PatientCard key={patient.id} patient={patient} />
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 18,
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#0ee3ae',
    marginTop: 10,
  },
})

export default Display
