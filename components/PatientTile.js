import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const PatientTile = ({ patient, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DisplayInfo', { id: patient.id })}
      activeOpacity={0.2}
      style={styles.tile}
    >
      <Text style={styles.name}>
        {patient.first_name} {patient.middle_name} {patient.last_name}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.column1}>
          <Text style={styles.info}>DOB: {patient.date_of_birth}</Text>
          <Text style={styles.info}>Phone: {patient.phone_mobile}</Text>
          <Text style={styles.info}>Email: {patient.email}</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.info}> Last Visit: </Text>
          <Text style={styles.info}> Illness: {patient.current_illness}</Text>
          <Text style={styles.info}> Next Appt: </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 3,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: '#0ee3ae',
    alignItems: 'baseline',
  },
  name: {
    fontFamily: 'Lexend_500Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  info: {
    fontFamily: 'Lexend_300Light',
  },
  column1: {
    flex: 1,
  },
  column2: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default PatientTile
