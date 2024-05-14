import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'

const PrescriptionHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('NewPrescription')}
      >
        <Text style={styles.buttonText}>New Prescription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('PrescriptionTracker')}
        >
          Prescription Tracker
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonText: {
    fontFamily: 'Lexend_500Medium',
    fontSize: 24,
    color: '#fff',
  },
  button1: {
    flex: 2,
    backgroundColor: '#0ee3ae',
    borderRadius: 20,
    marginVertical: 0,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    width: '95%',
    alignItems: 'center',
    marginVertical: 30,
  },
  button2: {
    flex: 2,
    backgroundColor: '#0ee3ae',
    borderRadius: 20,
    marginVertical: 0,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    width: '95%',
    alignItems: 'center',
    marginBottom: 30,
  },
})

export default PrescriptionHome
