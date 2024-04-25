import React, { Fragment } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Image } from 'react-native'
import background from '../../assets/login-background-gradient-moon-cloud.png'
import logo from '../../assets/logo-seafoam-transparent.png'

export function SplashScreen({ navigation }) {
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor:'#0c4370'}}/>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode='cover'
          style={styles.image}
        >
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <View style={styles.textBox}>
                <Text style={styles.logoText}>Medical</Text>
                <Text style={styles.logoText}>App</Text>
              </View>
            </View>
            <Text style={styles.statement}>Patient Management</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0ee3ae',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    elevation: 50,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Lexend_500Medium',
  },
  content: {
    padding: 10,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    //elevation: 5,
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 180,
  },
  logoContainer: {
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'Lexend_500Medium',
    fontSize: 32,
    color: '#0ee3ae',
  },
  statement: {
    fontFamily: 'Lexend_600SemiBold',
    fontSize: 32,
    color: '#fff',
  },
  textBox: {
    //flex: 1,
    alignItems: 'center',
  },
})
