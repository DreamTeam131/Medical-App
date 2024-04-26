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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { supabase } from '../lib/supabase'
import SearchCard from '../lib/SearchCard'
import Form from '../components/Form'
import SearchBox from '../components/SearchBox'
import PatientTile from '../components/PatientTile'

const Select = ({ navigation }) => {
  const [fetchError, setFetchError] = useState(null)
  const [patient, setPatient] = useState(null)
  const [text, setText] = useState('')
  useEffect(() => {
    const fetchPatient = async () => {
      const { data, error } = await supabase.from('patient_info').select()
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBox
            placeholder='Enter First Name'
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() =>
              navigation.navigate('SpecificSelect', { search: text })
            }
          >
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.patientList}>
          <Text style={styles.label}>Patient List</Text>
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
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  grid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontStyle: 'italic',
    fontSize: 15,
  },
  searchBarContainer: {
    paddingTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  searchButton: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#0ee3ae',
    paddingVertical: 10,
    marginVertical: 10,
  },
  searchText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Lexend_400Regular',
  },
  patientList: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
})

export default Select
