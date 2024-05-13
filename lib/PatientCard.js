import { Lexend_300Light, Lexend_400Regular } from '@expo-google-fonts/lexend'
import { View, Text, StyleSheet } from 'react-native'

const PatientCard = ({ patient }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>Name</Text>
      <Text style={styles.regularText}>
        {patient.first_name} {patient.middle_name} {patient.last_name}
      </Text>

      <Text style={styles.bigTitle}>Date of Birth</Text>
      <Text style={styles.regularText}>{patient.date_of_birth}</Text>

      <Text style={styles.bigTitle}>Marital Status</Text>
      <Text style={styles.regularText}>{patient.marital_status}</Text>

      <Text style={styles.bigTitle}>Contact Info</Text>
      <Text style={styles.miniTitle}>Home Phone</Text>
      <Text style={styles.regularText}>{patient.phone_home}</Text>
      <Text style={styles.miniTitle}>Mobile Phone</Text>
      <Text style={styles.regularText}>{patient.phone_mobile}</Text>
      <Text style={styles.miniTitle}>Email Address</Text>
      <Text style={styles.regularText}>{patient.email}</Text>

      <Text style={styles.bigTitle}>Emergency Contact</Text>
      <Text style={styles.miniTitle}>Contact Name</Text>
      <Text style={styles.regularText}>{patient.emergency_name}</Text>
      <Text style={styles.miniTitle}>Contact Number</Text>
      <Text style={styles.regularText}>{patient.emergency_phone}</Text>

      <Text style={styles.bigTitle}>Medical Info: </Text>
      <Text style={styles.miniTitle}>Blood Type:</Text>
      <Text style={styles.regularText}>{patient.blood_group}</Text>
      <Text style={styles.miniTitle}>RH Factor:</Text>
      <Text style={styles.regularText}>{patient.rh_factor}</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  bigTitle: {
    fontFamily: 'Lexend_500Medium',
    fontSize: 22,
    color: '#0ee3ae',
    marginTop: 10,
  },
  miniTitle: {
    fontSize: 18,
    fontFamily: 'Lexend_400Regular',
  },
  regularText: {
    fontSize: 18,
    fontFamily: 'Lexend_300Light',
  },
})

export default PatientCard
