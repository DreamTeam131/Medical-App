import React from "react";
import { View, Text, StatusBar, Button, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export function EditGeneralInfo({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.formHeader}>Edit General Information</Text>
          <Button title="Submit" onPress={() => navigation.navigate('NewPatientHealthConditions')}/>
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