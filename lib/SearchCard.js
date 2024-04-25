import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SearchCard = ({ patient, navigation }) => {
  return (
    <View style={styles.grid} className='ScreenSearch'>
      <Text style={styles.miniTitle}> First Name: </Text>
      <Text style={styles.regularText}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DisplayInfo', { id: patient.id })}
        >
          <Text>{patient.first_name}</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.miniTitle}> Last Name: </Text>
      <Text style={styles.regularText}>{patient.last_name}</Text>
      <Text style={styles.miniTitle}> Date of Birth: </Text>
      <Text style={styles.regularText}>{patient.date_of_birth} </Text>
      <Text style={styles.regularText}>{patient.id} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  bigTitle: {
    borderWidth: 5,
    borderColor: '#20232a',
    borderRadius: 10,
    backgroundColor: '#61dafb',
    overflow: 'hidden',
    marginTop: 50,
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 80,
  },
  miniTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  regularText: {
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontStyle: 'italic',
    gap: 10,
    rowGap: 100,
  },
})

export default SearchCard
