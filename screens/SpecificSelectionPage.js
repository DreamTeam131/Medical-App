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
    <ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Button
            title='{Back}'
            onPress={() => navigation.navigate('Select')}
          />

          {fetchError && <Text>{fetchError}</Text>}
          {patient && (
            <View style={{ flex: 2 }}>
              {patient.map((patient) => (
                <Text>
                  <SearchCard
                    key={patient.id}
                    patient={patient}
                    navigation={navigation}
                  />
                </Text>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  grid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontStyle: 'italic',
    fontSize: 15,
  },
  textBox: {
    borderWidth: 1,
    borderBlockColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
})

export default SelectThis
