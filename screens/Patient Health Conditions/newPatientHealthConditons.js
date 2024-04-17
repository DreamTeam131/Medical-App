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

const initialValues = {
  currentIllness: '',
  previousIllness: '',
  allergies: '',
}
const validationSchema = yup.object({
  currentIllness: yup.string().required(),
  previousIllness: yup.string(),
  allergies: yup.string(),
})
export function NewPatientHealthConditions({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.app}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
            navigation.navigate('NewPatientMedications')
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.label}>Allergies</Text>

              <Form
                placeholder='List all known allergies here'
                value={props.values.allergies}
                onChangeText={props.handleChange('allergies')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
              />

              <Text style={styles.label}>Previous Medical History</Text>

              <Form
                placeholder='List conditions/illnesses here'
                value={props.values.previousIllness}
                onChangeText={props.handleChange('previousIllness')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
              />
              <Text style={styles.label}>Current Illness</Text>

              <Form
                placeholder='Enter Current Illness or Condition'
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
  },
})
