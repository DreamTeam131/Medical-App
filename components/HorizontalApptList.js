import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

const appointments = [
  { id: 1, name: 'John Smith', time: '9:00 AM', image: 'uri_to_image1' },
  { id: 2, name: 'Mike Jones', time: '10:30 AM', image: 'uri_to_image2' },
  { id: 3, name: 'Peter Parker', time: '12:00 PM', image: 'uri_to_image2' },
  { id: 4, name: 'Kelly Price', time: '1:00 PM', image: 'uri_to_image2' },
  { id: 5, name: 'Bruce Wayne', time: '2:30 PM', image: 'uri_to_image2' },
  { id: 6, name: 'Diana Prince', time: '4:00 PM', image: 'uri_to_image2' },

  // More appointments...
]

const AppointmentItem = ({ appointment }) => (
  <View style={styles.appointmentItem}>
    <Image
      source={{ uri: appointment.image }}
      style={styles.appointmentImage}
    />
    <Text style={styles.appointmentText}>
      {appointment.name} - {appointment.time}
    </Text>
  </View>
)

const HorizontalApptList = () => {
  return (
    <FlatList
      data={appointments}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <AppointmentItem appointment={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  appointmentItem: {
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  appointmentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  appointmentText: {
    fontSize: 16,
    fontFamily: 'Lexend_300Light',
  },
})

export default HorizontalApptList
