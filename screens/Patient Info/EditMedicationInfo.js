import React from 'react'
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { supabase } from '../../lib/supabase'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'
import { Formik } from 'formik'

const EditMedication = ({ navigation, route }) => {
  const { id } = route.params
  const [fetchError, setFetchError] = useState(null)
  const [patient, setPatient] = useState(null)
  const [info, setInfo] = useState([])
  const [formError, setFormError] = useState(null)
  const [otherNew, setThisNew] = useState(null)
  const [deleteThis, setDelete] = useState(null)

  const remove = () => {
    let position = info.indexOf(deleteThis)
    const x = info.splice(position, 1)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (info == []) {
      if (!otherNew) {
        setFormError('Please fill in all fields correctly')
        return
      }
      if (deleteThis) {
        setFormError('Cannot Delete Element That Does Not Exist')
        return
      }
      info.push(otherNew)

      const { data, error } = await supabase
        .from('patient_info')
        .update({ medication_info: info })
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
        setFormError('Please fill in all fields correctly')
      }
      if (data) {
        setFormError(null)
        console.log(data)
        navigation.navigate('OtherInfo', { id: id })
      }
    }

    if (info) {
      if (otherNew) {
        info.push(otherNew)
      }
      if (deleteThis) {
        if (!info.includes(deleteThis)) {
          setFormError('Cannot Delete Element That Does Not Exist')
          return
        }
        remove()
      }
      const { data, error } = await supabase
        .from('patient_info')
        .update({ medication_info: info })
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
        setFormError('Please fill in all fields correctly')
      }
      if (data) {
        setFormError(null)
        console.log(data)
        navigation.navigate('OtherInfo', { id: id })
      }
    }
  }

  useEffect(() => {
    const fetchPatient = async () => {
      const { data, error } = await supabase
        .from('patient_info')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        setFetchError('Could not fetch patient')
        setPatient(null)
        console.log(error)
      }
      if (data) {
        setInfo(data.medication_info)
        setFetchError(null)
      }
      if (data.medication_info == null) {
        setInfo([])
      }
    }
    fetchPatient()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {formError && <Text>{formError}</Text>}

          <Formik onSubmit={handleSubmit}>
            <View>
              <Text style={styles.label}>Add:</Text>
              <Form
                placeholder={''}
                value={otherNew}
                onChangeText={(e) => setThisNew(e)}
              />

              <Text style={styles.label}>Delete:</Text>
              <Form
                placeholder={''}
                value={deleteThis}
                onChangeText={(e) => setDelete(e)}
              />
              <SubmitButton onPress={handleSubmit} />
              <Button
                title='Cancel'
                onPress={() => navigation.navigate('OtherInfo', { id: id })}
              />
            </View>
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    marginBottom: 20,
  },
  coolStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
    fontFamily: 'Lexend_400Regular',
  },
})

export default EditMedication
