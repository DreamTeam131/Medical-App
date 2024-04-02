import React from "react";
import { View, Text, StatusBar, Button, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export function EditUpcomingAppointments({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.formHeader}>Edit Upcoming Appointments</Text>
                <Button title="Submit" onPress={() => navigation.navigate('Home')}/>
            </ScrollView> 
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",

},
"modal-container": {
    flex: 1,
    alignItems: "center",
    borderRadius: 18,
},
formHeader: {
    textDecorationLine:'underline',
    textAlign:'left',
    marginLeft: 10,
    marginTop:10,
    fontSize: 15
}
});