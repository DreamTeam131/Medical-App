import React from 'react'
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { StatusBar } from 'expo-status-bar'
import { AddNewPatient } from './Patient Info/AddNewPatient'
import Select from './SelectionPage'
import { NewAppointment } from './Patient Upcoming Appointments/NewAppointment'
import { supabase } from '../lib/supabase'
import LogoSeafoam from '../assets/logo-seafoam-transparent.png'
import Africa from '../assets/africa-blue2.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HorizontalApptList from '../components/HorizontalApptList'
import Form from '../components/Form'
import { CalendarScreen } from './NewCalendarScreen'
import SearchBox from '../components/SearchBox'

const today = new Date()
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
let day = week[today.getDay()]
let month = months[today.getMonth()]
function HomeScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {day}, {month} {today.getDate()}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.label}>Upcoming Appointments</Text>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.apptlist}>
          <HorizontalApptList />
        </View>
        <View style={styles.searchBarContainer}>
          <Text style={styles.labels}>Patient Search</Text>
          <SearchBox placeholder='Search by patient name...' />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

async function logout() {
  try {
    let { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message)
    }
  }
}

function DrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image source={LogoSeafoam} style={styles.drawerLogo} />
          <Text style={styles.headerText}>Medical{'\n'}App</Text>
        </View>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const DrawerStack = createDrawerNavigator()

export function DrawerScreenStack({ navigation }) {
  return (
    <DrawerStack.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerRight: () => (
          <Image style={styles.tinyLogo} source={LogoSeafoam} />
        ),
        headerStyle: { borderBottomWidth: 2, borderColor: '#0ee3ae' },
        headerTitleStyle: { fontFamily: 'Lexend_400Regular' },
        drawerActiveTintColor: '#0ee3ae',
        //drawerActiveBackgroundColor: '#0ee3ae',
        drawerInactiveTintColor: '#000',
        //drawerInactiveBackgroundColor: '#ddd',
        drawerLabelStyle: {
          fontFamily: 'Lexend_400Regular',
          fontSize: 18,
        },
        drawerItemStyle: { borderRadius: 20 },
      }}
    >
      <DrawerStack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Dashboard' }}
      />
      <DrawerStack.Screen name='New Patient' component={AddNewPatient} />
      <DrawerStack.Screen name='Find Patient' component={Select} />
      <DrawerStack.Screen name='Appointments' component={NewAppointment} />
      <DrawerStack.Screen name='Analysis' component={HomeScreen} />
      <DrawerStack.Screen name='Prescriptions' component={HomeScreen} />
    </DrawerStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: '#fff',
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 20,
    marginHorizontal: 10,
    //alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  tinyLogo: {
    height: 50,
    width: 50,
    marginRight: 12,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Lexend_400Regular',
    color: '#fff',
  },
  logoutButton: {
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#0ee3ae',
    marginBottom: 30,
  },
  drawerFooter: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  drawerLogo: {
    width: 100,
    height: 80,
  },
  headerText: {
    fontFamily: 'Lexend_600SemiBold',
    color: 'black',
    fontSize: 24,
  },
  dateText: {
    fontFamily: 'Lexend_300Light',
    fontSize: 22,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontFamily: 'Lexend_400Regular',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  labels: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 8,
  },
  seeAll: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 12,
    //marginLeft: 10,
    //marginBottom: 10,
    //marginTop: 4,
    color: '#0ee3ae',
  },
  searchBarContainer: {
    paddingHorizontal: 0,
  },
})
