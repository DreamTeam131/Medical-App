import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { useState } from 'react'
import {
  useFonts,
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_500Medium,
  Lexend_300Light,
} from '@expo-google-fonts/lexend'

const Form = ({ onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  let [fontsLoaded, fontError] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.form}>
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus()
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={[
          styles.input,
          {
            borderColor: isFocused ? '#0ee3ae' : '#fff',
            backgroundColor: isFocused ? 'white' : '#eee',
          },
        ]}
        cursorColor='#ccc'
        value={props.value}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {},
  input: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 20,
    marginVertical: 4,
    borderWidth: 1.5,
    fontFamily: 'Lexend_400Regular',
  },
  errorBorder: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 20,
    marginVertical: 4,
    borderWidth: 1.5,
    fontFamily: 'Lexend_400Regular',
    borderColor: 'red',
  },
})

export default Form
