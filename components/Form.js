import { View, StyleSheet, TextInput } from 'react-native'
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
})

export default Form
