import { View, StyleSheet, TextInput, Text } from 'react-native'
import { useState } from 'react'

const Form = ({ onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
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
            borderColor: isFocused ? 'blue' : '#fff',
            backgroundColor: isFocused ? 'white' : '#eee',
          },
        ]}
        cursorColor='blue'
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
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 30,
    marginVertical: 4,
    borderWidth: 1.2,
  },
})

export default Form
