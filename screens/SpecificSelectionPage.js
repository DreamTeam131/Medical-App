import React from 'react'
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { supabase } from '../lib/supabase'
import SearchCard from '../lib/SearchCard'
import PatientTile from '../components/PatientTile'

const SelectThis = ({ navigation, route }) => {
  const [fetchError, setFetchError] = useState(null)
  const [patient, setPatient] = useState(null)
  const [text, setText] = useState('')
  const { search } = route.params
  useEffect(() => {
    const fetchPatient = async () => {
      const { data, error } = await supabase
        .from('patient_info')
        .select()
        .eq('first_name', search)

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
    <ScrollView style={styles.container}>
      <View style={styles.patientList}>
        {fetchError && <Text>{fetchError}</Text>}
        {patient && (
          <View>
            {patient.map((patient) => (
              <PatientTile
                key={patient.id}
                patient={patient}
                navigation={navigation}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  patientList: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
})

export default SelectThis
