import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../components/globalStylesheet";

export default function Login({ navigation }) {
    return (
        <View style={globalStyles.loginContainer}>
            <TextInput style={globalStyles.loginTextInput} placeholder="Username"></TextInput>
            <TextInput style={globalStyles.loginTextInput} placeholder="Password" secureTextEntry></TextInput>
            <Button title='Forgot Username/Password?' onPress={() => navigation.navigate('forgotPassword')}/>
            <Button style={globalStyles.loginButton} title='Sign-In' onPress={() => navigation.navigate('Home')}/>
            <Button style={globalStyles.loginButton} title='Sign-Up'onPress={() => navigation.navigate('register')}/>
        </View>
    )
}