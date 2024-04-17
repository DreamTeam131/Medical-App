import React from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { StatusBar } from 'expo-status-bar'
import { NewPatientGeneralInfo } from './Patient General Info/newPatientGeneralInfo'
import { EditGeneralInfo } from './Patient General Info/editGeneralInfo'
//import { Image } from "react-native-elements";
import Logo from '../assets/Logo1.png'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home page/dashboard</Text>
      <StatusBar style='auto' />
    </View>
  )
}

function DrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.headerText}>Medical App</Text>
        </View>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ marginBottom: 15 }}>
        <Button
          title='LOGOUT'
          onPress={() => {
            props.navigation.closeDrawer()
          }}
        />
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
    >
      <DrawerStack.Screen
        name='Home'
        component={HomeScreen}
        options={
          {
            /*headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddNewPatientGeneralInfo')}
              title='+'
            />
          ),*/
          }
        }
      />
      <DrawerStack.Screen
        name='New Patient'
        component={NewPatientGeneralInfo}
        options={({ navigation }) => ({
          HeaderTitle: 'General Info',
          headerBackTitle: 'Back',
          headerRight: () => (
            <View style={styles.headerRight}>
              <Button
                onPress={() =>
                  navigation.navigate('NewPatientHealthConditions')
                }
                title='Next'
              />
            </View>
          ),
        })}
      />
    </DrawerStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  'modal-container': {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
  },
  formHeader: {
    textDecorationLine: 'underline',
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
  },
  drawerHeader: {
    height: 80,
    backgroundColor: '#9fccd1',
    margin: 10,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#437f8c',
  },
  logo: {
    height: 76,
    width: 76,
    borderRadius: 7,
  },
  headerText: {
    fontSize: 28,
    marginLeft: 12,
    color: '#437f8c',
  },
  headerRight: {
    marginRight: 10,
  },
})
