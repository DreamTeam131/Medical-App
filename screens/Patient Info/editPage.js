import React from 'react'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'
import { Formik } from 'formik'
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

const Edit = ({ navigation, route }) => {
  const { id } = route.params
  const [fetchError, setFetchError] = useState(null)
  const [patient, setPatient] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [homePhone, setHomePhone] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [rhFactor, setRHFactor] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [currentIllness, setCurrentIllness] = useState('')

  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !dateOfBirth ||
      !maritalStatus ||
      !homePhone ||
      !mobilePhone ||
      !emailAddress ||
      !emergencyName ||
      !emergencyPhone ||
      !rhFactor ||
      !bloodGroup ||
      !currentIllness
    ) {
      setFormError('Please fill in all fields correctly')
      return
    }

    const { data, error } = await supabase
      .from('patient_info')
      .update({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        marital_status: maritalStatus,
        phone_home: homePhone,
        phone_mobile: mobilePhone,
        email: emailAddress,
        emergency_name: emergencyName,
        emergency_phone: emergencyPhone,
        rh_factor: rhFactor,
        blood_group: bloodGroup,
        current_illness: currentIllness,
      })
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
      navigation.navigate('DisplayInfo', { id: id })
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
        setFetchError(null)
        setFirstName(data.first_name)
        setMiddleName(data.middle_name)
        setLastName(data.last_name)
        setDateOfBirth(data.date_of_birth)
        setMaritalStatus(data.marital_status)
        setHomePhone(data.phone_home)
        setMobilePhone(data.phone_mobile)
        setEmailAddress(data.email)
        setEmergencyName(data.emergency_name)
        setEmergencyPhone(data.emergency_phone)
        setRHFactor(data.rh_factor)
        setBloodGroup(data.blood_group)
        setCurrentIllness(data.current_illness)
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
              <Text style={styles.label}>First Name:</Text>
              <Form
                placeholder={firstName}
                value={firstName}
                onChangeText={(e) => setFirstName(e)}
              />

              <Text style={styles.label}>Middle Name:</Text>
              <Form
                placeholder={middleName}
                value={middleName}
                onChangeText={(e) => setMiddleName(e)}
              />

              <Text style={styles.label}>Last Name:</Text>
              <Form
                placeholder={lastName}
                value={lastName}
                onChangeText={(e) => setLastName(e)}
              />

              <Text style={styles.label}>Date of Birth:</Text>
              <Form
                placeholder={dateOfBirth}
                value={dateOfBirth}
                onChangeText={(e) => setDateOfBirth(e)}
              />

              <Text style={styles.label}>Marital Status:</Text>
              <Form
                placeholder={maritalStatus}
                value={maritalStatus}
                onChangeText={(e) => setMaritalStatus(e)}
              />

              <Text style={styles.label}>Home Phone Number:</Text>
              <Form
                placeholder={homePhone}
                value={homePhone}
                onChangeText={(e) => setHomePhone(e)}
                maxLength={13}
                keyboardType='numeric'
              />

              <Text style={styles.label}>Mobile Phone Number:</Text>
              <Form
                placeholder={mobilePhone}
                value={mobilePhone}
                onChangeText={(e) => setMobilePhone(e)}
                maxLength={13}
                keyboardType='numeric'
              />

              <Text style={styles.label}>Email Address:</Text>
              <Form
                placeholder={emailAddress}
                value={emailAddress}
                onChangeText={(e) => setEmailAddress(e)}
              />

              <Text style={styles.label}>Emergency Contact Name:</Text>
              <Form
                placeholder={emergencyName}
                value={emergencyName}
                onChangeText={(e) => setEmergencyName(e)}
              />

              <Text style={styles.label}>Emergency Contact Number:</Text>
              <Form
                placeholder={emergencyPhone}
                value={emergencyPhone}
                onChangeText={(e) => setEmergencyPhone(e)}
                maxLength={13}
                keyboardType='numeric'
              />

              <Text style={styles.label}>RH Factor:</Text>
              <Form
                placeholder={rhFactor}
                value={rhFactor}
                onChangeText={(e) => setRHFactor(e)}
              />

              <Text style={styles.label}>Blood Type:</Text>
              <Form
                placeholder={bloodGroup}
                value={bloodGroup}
                onChangeText={(e) => setBloodGroup(e)}
              />

              <Text style={styles.label}>Current Illness: </Text>
              <Form
                placeholder={currentIllness}
                value={currentIllness}
                onChangeText={(e) => setCurrentIllness(e)}
              />

              <SubmitButton onPress={handleSubmit} />
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
    backgroundColor: '#fff',
    //alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
    fontFamily: 'Lexend_400Regular',
  },
})

export default Edit
