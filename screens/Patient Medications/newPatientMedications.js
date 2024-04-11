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
  currentMedication: '',
  pastMedication: '',
}
const validationSchema = yup.object({
  currentMedication: yup.string(),
  pastMedication: yup.string(),
})

export function NewPatientMedications({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.app}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
            navigation.navigate('Home')
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.label}>Current Medications</Text>

              <Form
                placeholder='List current medications'
                value={props.values.currentMedication}
                onChangeText={props.handleChange('currentMedication')}
                keyboardType='default'
                multiline={true}
                numberOfLines={2}
              />

              <Text style={styles.label}>Past Medications</Text>

              <Form
                placeholder='List past medications'
                value={props.values.pastMedication}
                onChangeText={props.handleChange('pastMedication')}
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
