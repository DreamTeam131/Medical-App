import React from "react";
import { View, Text, StatusBar, Button, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export function NewPatientHealthConditions({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.formHeader}>Health Conditons</Text>
                <Button title="Next Page" onPress={() => navigation.navigate('NewPatientMedications')}/>
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