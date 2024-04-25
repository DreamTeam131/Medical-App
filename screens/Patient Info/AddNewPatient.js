import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import * as yup from 'yup'
import Dropdown from 'react-native-input-select'
import Icon from 'react-native-vector-icons/Entypo'
import { supabase } from '../../lib/supabase'
import { Lexend_300Light } from '@expo-google-fonts/lexend'
//import { TextInputMask } from 'react-native-masked-text'

const dropdownIcon = <Icon name='chevron-thin-down' size={25} color='#000' />

const initialValues = {
  first: '',
  middle: '',
  last: '',
  day: '',
  year: '',
  month: '',
  maritalStatus: '',
  phoneMobile: '',
  bloodGroup: '',
  rhFactor: '',
  phoneHome: '',
  emailAddress: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
  currentIllness: '',
  previousIllness: '',
  allergies: '',
  currentMedication: '',
  pastMedication: '',
}

const bloodGroup = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'AB', value: 'AB' },
  { label: 'O', value: 'O' },
]

const rhFactor = [
  { label: '+ (Positive)', value: 'positive' },
  { label: '- (Negative)', value: 'negative' },
]

const maritalStatus = [
  { label: 'Single', value: 'single' },
  { label: 'Married', value: 'married' },
]

const validationSchema = yup.object({
  first: yup
    .string()
    .required('First name required')
    .min(2, 'First name must be at least 2 characters'),
  middle: yup
    .string()
    .required('Middle name required')
    .min(2, 'Middle name must be at least 2 characters'),
  last: yup
    .string()
    .required('Last name required')
    .min(2, 'Last name must be at least 2 characters'),
  year: yup.string().required('Year required').min(4),
  day: yup.string().required('Day required').min(2),
  month: yup.string().required('Month required').min(2),
  emailAddress: yup
    .string()
    .required('Email required')
    .min(5)
    .email('Not a valid email'),
  //.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/),
  phoneHome: yup.string(),
  phoneMobile: yup.string().required('Phone # required'),
  maritalStatus: yup.string().required('Marital Status required'),
  rhFactor: yup.string().required('RH factor required'),
  bloodGroup: yup.string().required('Blood group required'),
  currentIllness: yup.string().required('Current illness required'),
  previousIllness: yup.string(),
  allergies: yup.string(),
  currentMedication: yup.string(),
  pastMedication: yup.string(),
})

export function AddNewPatient({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Patient</Text>
      </View>
      <View style={styles.app}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { error } = await supabase.from('patient_info').insert([
              {
                first_name: values.first,
                last_name: values.last,
                middle_name: values.middle,
                date_of_birth: new Date(values.year, values.month, values.day),
                marital_status: values.maritalStatus,
                phone_mobile: values.phoneMobile,
                phone_home: values.phoneHome,
                email: values.emailAddress,
                emergency_name: values.emergencyContactName,
                emergency_phone: values.emergencyContactPhone,
                rh_factor: values.rhFactor,
                blood_group: values.bloodGroup,
                allergies: [values.allergies],
                current_illness: values.currentIllness,
                prev_illness: [values.previousIllness],
                medications: [
                  values.currentMedication
                    .split(',')
                    .trim()
                    .push(...values.pastMedication.split(',').trim()),
                ],
              },
            ])
            console.log(error)
            console.log(values)
            actions.resetForm()
            Alert.alert(
              'New Patient: ' + values.first + ' ' + values.last + ' added'
            )
            navigation.navigate('Home')
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.label}>Name</Text>

              <Form
                placeholder='First'
                value={props.values.first}
                onChangeText={props.handleChange('first')}
              />
              {props.errors.first && props.touched.first ? (
                <Text style={styles.error}>{props.errors.first}</Text>
              ) : null}
              <Form
                placeholder='Middle'
                value={props.values.middle}
                onChangeText={props.handleChange('middle')}
              />
              {props.errors.middle && props.touched.middle ? (
                <Text style={styles.error}>{props.errors.middle}</Text>
              ) : null}

              <Form
                placeholder='Last'
                value={props.values.last}
                onChangeText={props.handleChange('last')}
              />

              {props.errors.last && props.touched.last ? (
                <Text style={styles.error}>{props.errors.last}</Text>
              ) : null}
              <Text style={styles.label}>Date of Birth</Text>

              <Form
                placeholder='YYYY'
                value={props.values.year}
                onChangeText={props.handleChange('year')}
                maxLength={4}
                keyboardType='numeric'
              />

              {props.errors.year && props.touched.year ? (
                <Text style={styles.error}>{props.errors.year}</Text>
              ) : null}

              <Form
                placeholder='MM'
                value={props.values.month}
                onChangeText={props.handleChange('month')}
                maxLength={2}
                keyboardType='numeric'
              />

              {props.errors.month && props.touched.month ? (
                <Text style={styles.error}>{props.errors.month}</Text>
              ) : null}

              <Form
                placeholder='DD'
                value={props.values.day}
                onChangeText={props.handleChange('day')}
                maxLength={2}
                keyboardType='numeric'
              />

              {props.errors.day && props.touched.day ? (
                <Text style={styles.error}>{props.errors.day}</Text>
              ) : null}

              <Text style={styles.label}>Contact Info</Text>

              <Form
                placeholder='Phone Residence'
                value={props.values.phoneHome}
                onChangeText={props.handleChange('phoneHome')}
                maxLength={13}
                keyboardType='numeric'
              />

              {props.errors.phoneHome && props.touched.phoneHome ? (
                <Text style={styles.error}>{props.errors.phoneHome}</Text>
              ) : null}

              <Form
                placeholder='Phone Mobile'
                value={props.values.phoneMobile}
                onChangeText={props.handleChange('phoneMobile')}
                maxLength={13}
                keyboardType='numeric'
              />

              {props.errors.phoneMobile && props.touched.phoneMobile ? (
                <Text style={styles.error}>{props.errors.phoneMobile}</Text>
              ) : null}

              <Form
                placeholder='Email Address'
                value={props.values.emailAddress}
                onChangeText={props.handleChange('emailAddress')}
                maxLength={30}
                keyboardType='email-address'
              />

              {props.errors.emailAddress && props.touched.emailAddress ? (
                <Text style={styles.error}>{props.errors.emailAddress}</Text>
              ) : null}

              <Text style={styles.label}>Emergency Contact Info</Text>

              <Form
                placeholder='Emergency Contact Name'
                value={props.values.emergencyContactName}
                onChangeText={props.handleChange('emergencyContactName')}
                maxLength={30}
                keyboardType='default'
              />

              {props.errors.emergencyContactName &&
              props.touched.emergencyContactName ? (
                <Text style={styles.error}>
                  {props.errors.emergencyContactName}
                </Text>
              ) : null}

              <Form
                placeholder='Emergency Contact Phone #'
                value={props.values.emergencyContactPhone}
                onChangeText={props.handleChange('emergencyContactPhone')}
                maxLength={13}
                keyboardType='numeric'
              />

              {props.errors.emergencyContactPhone &&
              props.touched.emergencyContactPhone ? (
                <Text style={styles.error}>
                  {props.errors.emergencyContactPhone}
                </Text>
              ) : null}

              <Text style={styles.label}>Marital Status</Text>

              <Dropdown
                placeholder='Select Marital Status'
                options={maritalStatus}
                selectedValue={props.values.maritalStatus}
                onValueChange={props.handleChange('maritalStatus')}
                dropdownStyle={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholder}
                dropdownIconStyle={styles.dropdownIconStyle}
                dropdownIcon={dropdownIcon}
                dropdownContainerStyle={styles.dropdownContainer}
                selectedItemStyle={styles.selectedItem}
                checkboxControls={{
                  checkboxSize: 29,
                  checkboxStyle: {
                    borderRadius: 30,
                    backgroundColor: 'blue',
                    padding: 2,
                  },
                  checkboxLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Lexend_400Regular',
                  },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

              {props.errors.maritalStatus && props.touched.maritalStatus ? (
                <Text style={styles.error}>{props.errors.maritalStatus}</Text>
              ) : null}

              <Text style={styles.label}>Blood Group</Text>

              <Dropdown
                placeholder='Select Blood Group'
                options={bloodGroup}
                selectedValue={props.values.bloodGroup}
                onValueChange={props.handleChange('bloodGroup')}
                dropdownStyle={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholder}
                dropdownIconStyle={styles.dropdownIconStyle}
                dropdownIcon={dropdownIcon}
                dropdownContainerStyle={styles.dropdownContainer}
                selectedItemStyle={styles.selectedItem}
                checkboxControls={{
                  checkboxSize: 29,
                  checkboxStyle: {
                    borderRadius: 30,
                    backgroundColor: 'blue',
                    padding: 2,
                  },
                  checkboxLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Lexend_400Regular',
                  },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

              {props.errors.bloodGroup && props.touched.bloodGroup ? (
                <Text style={styles.error}>{props.errors.bloodGroup}</Text>
              ) : null}

              <Text style={styles.label}>RH Factor</Text>

              <Dropdown
                placeholder='Select RH Factor'
                options={rhFactor}
                selectedValue={props.values.rhFactor}
                onValueChange={props.handleChange('rhFactor')}
                dropdownStyle={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholder}
                dropdownIconStyle={styles.dropdownIconStyle}
                dropdownIcon={dropdownIcon}
                dropdownContainerStyle={styles.dropdownContainer}
                selectedItemStyle={styles.selectedItem}
                checkboxControls={{
                  checkboxSize: 29,
                  checkboxStyle: {
                    borderRadius: 30,
                    backgroundColor: 'blue',
                    padding: 2,
                  },
                  checkboxLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Lexend_400Regular',
                  },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

              {props.errors.rhFactor && props.touched.rhFactor ? (
                <Text style={styles.error}>{props.errors.rhFactor}</Text>
              ) : null}

              <Text style={styles.label}>Allergies</Text>

              <Form
                placeholder='List all known allergies here'
                value={props.values.allergies}
                onChangeText={props.handleChange('allergies')}
                keyboardType='default'
              />

              <Text style={styles.label}>Previous Medical History</Text>

              <Form
                placeholder='List conditions/illnesses here'
                value={props.values.previousIllness}
                onChangeText={props.handleChange('previousIllness')}
                keyboardType='default'
              />

              <Text style={styles.label}>Current Illness</Text>

              <Form
                placeholder='Enter current illness or condition'
                value={props.values.currentIllness}
                onChangeText={props.handleChange('currentIllness')}
                keyboardType='default'
              />

              <Text style={styles.label}>Current Medications</Text>

              <Form
                placeholder='List current medications'
                value={props.values.currentMedication}
                onChangeText={props.handleChange('currentMedication')}
                keyboardType='default'
              />

              <Text style={styles.label}>Past Medications</Text>

              <Form
                placeholder='List past medications'
                value={props.values.pastMedication}
                onChangeText={props.handleChange('pastMedication')}
                keyboardType='default'
              />

              <SubmitButton onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 7,
    paddingHorizontal: 20,
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
    marginBottom: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#0ee3ae',
  },
  label: {
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
    fontFamily: 'Lexend_400Regular',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  dropdown: {
    borderRadius: 20,
    backgroundColor: '#eee',
    fontSize: 18,
    borderWidth: 0,
    paddingVertical: 14,
    paddingLeft: 20,
    marginTop: 4,
    minHeight: 0,
  },
  dropdownPlaceholder: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Lexend_400Regular',
  },
  dropdownIconStyle: {
    top: 14,
    right: 30,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  dropdownContainer: {
    marginBottom: 5,
  },
  selectedItem: {
    fontSize: 18,
    fontFamily: 'Lexend_400Regular',
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    borderColor: 'white',
  },
  checkboxLabel: {
    fontSize: 18,
    fontFamily: 'Lexend_400Regular',
  },
  error: {
    fontFamily: 'Lexend_300Light',
    color: 'red',
    marginLeft: 20,
    marginBottom: 2,
  },
})
