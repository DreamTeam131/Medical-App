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
import { supabase } from '../../lib/supabase'
import PatientCard from '../../lib/PatientCard'

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
        <Button title= 'Other Info' onPress= {() => navigation.navigate('DisplayMedical', {id:id})}/>
    <Button title= 'Edit' onPress={() => navigation.navigate('EditInfo',{id:id})}/>
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
  },
})

export default Display
