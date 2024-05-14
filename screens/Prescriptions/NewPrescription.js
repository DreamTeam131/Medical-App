import React from 'react'
import { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

const NewPrescription = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>New Prescription</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Select Patient</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  form: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: 'Lexend_500Medium',
    fontSize: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#0ee3ae',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    paddingVertical: 10,
    fontFamily: 'Lexend_500Medium',
    marginLeft: 24,
  },
  header: {
    borderBottomWidth: 2,
    borderColor: '#0ee3ae',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    width: 300,
    marginLeft: 20,
    marginTop: 0,
    fontFamily: 'Lexend_400Regular',
  },
  dropdown: {
    margin: 0,
    height: 50,
    borderColor: '#0ee3ae',
    borderWidth: 1.5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default NewPrescription
