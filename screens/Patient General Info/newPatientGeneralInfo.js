import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import * as yup from 'yup'
import Dropdown from 'react-native-input-select'
import Icon from 'react-native-vector-icons/Entypo'

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
}

const bloodGroup = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'AB', value: 'A' },
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
  first: yup.string().required().min(2),
  middle: yup.string().required().min(2),
  last: yup.string().required().min(2),
  year: yup.string().required().min(4),
  day: yup.string().required().min(2),
  month: yup.string().required().min(2),
  emailAddress: yup.string().required().min(5).email(),
  //.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/),
  phoneHome: yup.string().required(),
  phoneMobile: yup.string().required(),
  maritalStatus: yup.string().required(),
  rhFactor: yup.string().required(),
  bloodGroup: yup.string().required(),
})

export function NewPatientGeneralInfo({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add New Patient</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
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

              <Form
                placeholder='Middle'
                value={props.values.middle}
                onChangeText={props.handleChange('middle')}
              />

              <Form
                placeholder='Last'
                value={props.values.last}
                onChangeText={props.handleChange('last')}
              />

              <Text style={styles.label}>Date of Birth</Text>

              <Form
                placeholder='YYYY'
                value={props.values.year}
                onChangeText={props.handleChange('year')}
                maxLength={4}
                keyboardType='numeric'
              />

              <Form
                placeholder='MM'
                value={props.values.month}
                onChangeText={props.handleChange('month')}
                maxLength={2}
                keyboardType='numeric'
              />

              <Form
                placeholder='DD'
                value={props.values.day}
                onChangeText={props.handleChange('day')}
                maxLength={2}
                keyboardType='numeric'
              />

              <Text style={styles.label}>Contact Info</Text>

              <Form
                placeholder='Phone Residence'
                value={props.values.phoneHome}
                onChangeText={props.handleChange('phoneHome')}
                maxLength={13}
                keyboardType='numeric'
              />

              <Form
                placeholder='Phone Mobile'
                value={props.values.phoneMobile}
                onChangeText={props.handleChange('phoneMobile')}
                maxLength={13}
                keyboardType='numeric'
              />

              <Form
                placeholder='Email Address'
                value={props.values.emailAddress}
                onChangeText={props.handleChange('emailAddress')}
                maxLength={30}
                keyboardType='email-address'
              />

              <Text style={styles.label}>Emergency Contact Info</Text>

              <Form
                placeholder='Emergency Contact Name'
                value={props.values.emergencyContactName}
                onChangeText={props.handleChange('emergencyContactName')}
                maxLength={30}
                keyboardType='default'
              />

              <Form
                placeholder='Emergency Contact Phone #'
                value={props.values.emergencyContactPhone}
                onChangeText={props.handleChange('emergencyContactPhone')}
                maxLength={13}
                keyboardType='numeric'
              />

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
                  checkboxLabelStyle: { fontSize: 18 },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

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
                  checkboxLabelStyle: { fontSize: 18 },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

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
                  checkboxLabelStyle: { fontSize: 18 },
                  checkboxComponent: <View style={styles.radioButton} />,
                }}
              />

              <Text style={styles.label}>Allergies</Text>

              <Form
                placeholder='List all known allergies here'
                value={props.values.allergies}
                onChangeText={props.handleChange('allergies')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
              />

              <Text style={styles.label}>
                Recent Illnesses / {'\n'}Pre-existing Conditions
              </Text>

              <Form
                placeholder='List conditions here'
                value={props.values.previousIllness}
                onChangeText={props.handleChange('previousIllness')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
              />
              <Text style={styles.label}>Current Illness / Condition</Text>

              <Form
                placeholder='List conditions here'
                value={props.values.currentIllness}
                onChangeText={props.handleChange('currentIllness')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
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
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 32,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 0,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  dropdown: {
    borderRadius: 40,
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
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    borderColor: 'white',
  },
})
