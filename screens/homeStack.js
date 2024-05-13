import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerScreenStack } from './drawerStack'
import { StatusBar } from 'expo-status-bar'
import { EditPatient } from './Patient Info/EditPatient'
import { AddNewPatient } from './Patient Info/AddNewPatient'
import { NewPatientMedications } from './Patient Medications/newPatientMedications'
import { EditMedications } from './Patient Medications/editMedications'
import { NewPatientAnalysis } from './Patient Analysis/newPatientAnalysis'
import { EditAnalysis } from './Patient Analysis/editAnalysis'
import { NewPatientLabReports } from './Patient Lab Reports/newPatientLabReports'
import { NewPatientUpcomingAppointments } from './Patient Upcoming Appointments/NewAppointment'
import { EditUpcomingAppointments } from './Patient Upcoming Appointments/editUpcomingAppointments'
import { EditLabReports } from './Patient Lab Reports/editLabReports'
import SelectThis from './SpecificSelectionPage'
import Select from './SelectionPage'
import DisplayInfo from './Patient Info/DisplayInfo'
import CalendarScreen from './NewCalendarScreen'
import { NewAppointment } from './Patient Upcoming Appointments/NewAppointment'
import Edit from './Patient Info/editPage'
import DisplayMedical from './Patient Info/DisplayMedicalInfo'
import EditMedical from './Patient Info/EditPreviousIllness'
import EditAllergy from './Patient Info/EditAllergyInfo'
import EditMedication from './Patient Info/EditMedicationInfo'

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the detail page</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const HomeStack = createNativeStackNavigator()

export function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='DrawerHome'
        component={DrawerScreenStack}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{ headerBackTitle: 'Go Back', headerTitle: '' }}
      />

      <HomeStack.Screen
        name='Add New Patient'
        component={AddNewPatient}
        options={({ navigation }) => ({
          title: 'Add New Patient',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditGeneralInfo')}
              title='testing 123'
            />
          ),
        })}
      />
      <HomeStack.Screen
        name='Edit Patient'
        component={EditPatient}
        options={{ title: 'Edit General Info', headerBackTitle: 'Back' }}
      />

      <HomeStack.Screen
        name='NewPatientMedications'
        component={NewPatientMedications}
        options={({ navigation }) => ({
          title: 'Medications',
          headerBackTitle: 'Back',
          /*headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditMedications')}
              title=''
            />
          ),*/
        })}
      />
      <HomeStack.Screen
        name='EditMedications'
        component={EditMedications}
        options={{ title: 'Edit Medications', headerBackTitle: 'Back' }}
      />
      <HomeStack.Screen
        name='NewPatientAnalysis'
        component={NewPatientAnalysis}
        options={({ navigation }) => ({
          title: 'Analysis',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditAnalysis')}
              title='Edit'
            />
          ),
        })}
      />
      <HomeStack.Screen
        name='EditAnalysis'
        component={EditAnalysis}
        options={{ title: 'Edit Analysis', headerBackTitle: 'Back' }}
      />
      <HomeStack.Screen
        name='NewPatientLabReports'
        component={NewPatientLabReports}
        options={({ navigation }) => ({
          title: 'Lab Reports',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditLabReports')}
              title='Edit'
            />
          ),
        })}
      />
      <HomeStack.Screen
        name='EditLabReports'
        component={EditLabReports}
        options={{ title: 'Edit Lab Reports', headerBackTitle: 'Back' }}
      />
      <HomeStack.Screen
        name='SpecificSelect'
        component={SelectThis}
        options={{
          title: 'Search Results',
          headerBackTitle: 'Back',
        }}
      />
      <HomeStack.Screen
        name='Select'
        component={Select}
        options={{
          title: 'Find Patient',
          headerBackTitle: 'Back',
        }}
      />
      <HomeStack.Screen
        name='DisplayInfo'
        component={DisplayInfo}
        options={{
          title: 'Patient Information',
          headerBackTitle: 'Back',
        }}
      />
      <HomeStack.Screen
        name='New Appointment'
        component={NewAppointment}
        options={{
          title: 'Schedule an Appointment',
          headerBackTitle: 'Back',
        }}
      />
      <HomeStack.Screen
        name='EditInfo'
        component={Edit}
        options={{
          title: 'Edit Patient Info',
          headerBackTitle: 'Back',
        }}
      />  
      <HomeStack.Screen
        name='DisplayMedical'
        component={DisplayMedical}
        options={{
          title: 'Patient Medical Info',
          headerBackTitle: 'Back',
        }}
      />
      HomeStack.Screen
      name= 'EditOtherInfo'
      component={EditMedical}
      options={{
        title: 'Edit Patient Info',
        headerBackTitle: 'Back',
      }}
      />     
      <HomeStack.Screen
      name= 'EditAllergyInfo'
      component={EditAllergy}
      options={{
        title: 'Edit Patient Allergy Info',
        headerBackTitle: 'Back',
      }}
      />    
      <HomeStack.Screen
      name= 'EditMedicationInfo'
      component={EditMedication}
      options={{
        title: 'Edit Patient Medication Info',
        headerBackTitle: 'Back',
      }}
      />    
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
