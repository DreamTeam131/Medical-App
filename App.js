import React from "react";
import Navigator from './src/components/routes/stack';

export default function App () {
  return (
    <Navigator/>
  )
}


















































/*import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Navigator from '.src/stackNavigator'

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.form} alignItems='center'>
            <Text>Sign-In</Text>
            <TextInput style={styles.input} placeholder='Username' textAlign='center'/>
            <TextInput style={styles.input} placeholder='Password' textAlign='center' secureTextEntry/>
            <Button title='Login' onPress={() => {}}/>
            <Button title='forgot username/password?'/>
            <Button title='Sign-Up'/>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      paddingHorizontal:20,
      backgroundColor:'#f5f5f5'
  },
  form:{
      padding:40,
      borderRadius:5,
  },
  label:{
      fontSize:16,
      marginBottom:5,
      fontWeight:'bold'
  },
  input:{
      height:40,
      width:300,
      borderColor:'#ddd',
      borderWidth:1,
      marginTop:10,
      padding:5,
  },
})*/