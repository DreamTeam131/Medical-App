import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreenStack } from "./drawerStack";
import { StatusBar } from "expo-status-bar";
import { NewPatientGeneralInfo } from "./Patient General Info/newPatientGeneralInfo";
import { EditGeneralInfo } from "./Patient General Info/editGeneralInfo";
import { NewPatientHealthConditions } from "./Patient Health Conditions/newPatientHealthConditons";
import { EditHealthConditions } from "./Patient Health Conditions/editHealthConditions";
import { NewPatientMedications } from "./Patient Medications/newPatientMedications";
import { EditMedications } from "./Patient Medications/editMedications"
import { NewPatientAnalysis } from "./Patient Analysis/newPatientAnalysis";
import { EditAnalysis } from "./Patient Analysis/editAnalysis";
import { NewPatientLabReports } from "./Patient Lab Reports/newPatientLabReports";
import { NewPatientUpcomingAppointments } from "./Patient Upcoming Appointments/newPatientUpcomingAppointments";
import { EditUpcomingAppointments } from "./Patient Upcoming Appointments/editUpcomingAppointments";
import { EditLabReports } from "./Patient Lab Reports/editLabReports";
import { useNavigation } from "@react-navigation/native";

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the detail page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

export function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="DrawerHome" component={DrawerScreenStack} options={{ headerShown: false }}/>
      <HomeStack.Screen name='AddNewPatientGeneralInfo' component={NewPatientGeneralInfo} options={({ navigation }) => ({
        title: 'General Info',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditGeneralInfo')}
            title="Edit"
          />
          ),
        })}
      />
      <HomeStack.Screen name='EditGeneralInfo' component={EditGeneralInfo} options={{title:'Edit General Info', headerBackTitle:'Back'}}/>
      <HomeStack.Screen name='NewPatientHealthConditions' component={NewPatientHealthConditions} options={({ navigation }) => ({
        title: 'Health Conditions',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditHealthConditions')}
            title="Edit"
          />
          ),
        })}
      />
      <HomeStack.Screen name='EditHealthConditions' component={EditHealthConditions} options={{title:'Edit Health Conditions', headerBackTitle:'Back'}}/>
      <HomeStack.Screen name='NewPatientMedications' component={NewPatientMedications} options={({ navigation }) => ({
        title: 'Medications',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditMedications')}
            title="Edit"
          />
          ),
        })}
      />
      <HomeStack.Screen name='EditMedications' component={EditMedications} options={{title:'Edit Medications', headerBackTitle:'Back'}}/>
      <HomeStack.Screen name='NewPatientAnalysis' component={NewPatientAnalysis} options={({ navigation }) => ({
        title: 'Analysis',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditAnalysis')}
            title="Edit"
          />
          ),
        })}
      />
      <HomeStack.Screen name='EditAnalysis' component={EditAnalysis} options={{title:'Edit Analysis', headerBackTitle:'Back'}}/>
      <HomeStack.Screen name='NewPatientLabReports' component={NewPatientLabReports} options={({ navigation }) => ({
        title: 'Lab Reports',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditLabReports')}
            title="Edit"
          />
          ),
        })}
      />
      <HomeStack.Screen name='EditLabReports' component={EditLabReports} options={{title:'Edit Lab Reports', headerBackTitle:'Back'}}/>
      <HomeStack.Screen name='NewPatientUpcomingAppointments' component={NewPatientUpcomingAppointments} options={({ navigation }) => ({
        title: 'Upcoming Appointments',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('EditUpcomingAppointments')}
            title="Edit"
          />
          ),
        })}
      />      
      <HomeStack.Screen name='EditUpcomingAppointments' component={EditUpcomingAppointments} options={{title:'Edit Upcoming Appointments', headerBackTitle:'Back'}}/>
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});