import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './screens/Account'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function App() {
  const { session, setSession } = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
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