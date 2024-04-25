import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const SubmitButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0ee3ae',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Lexend_500Medium',
  },
})

export default SubmitButton
