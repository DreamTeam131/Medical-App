import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export function ForgotPasswordScreen ({ session, navigation }) {

    const[email, setEmail] = useState('')
    const[errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {}

        if(!email) errors.email = "Email is required"

        var validator = require("email-validator");
        if(!validator.validate(email)) errors.email = "Please enter a email"

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            setUserInputCode('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setErrors({}) 
        }
    }

    async function sendResetPassword({ email }) {
                
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.header}>Send Email</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="email@address.com" value={email} onChangeText={setEmail} autoCapitalize="none" />
                    {
                        errors.email ? (<Text style={styles.errorText}>{errors.email}</Text>) : null
}
                    <Button title='Confirm' onPress={() => sendResetPassword({ email })} />
                </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
    );
  }

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:'#f5f5f5',
        marginBottom:50,
    },
    form: {
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    header: {
        fontSize:16,
        marginBottom:15,
        fontWeight:'bold',
    },
    label: {
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold'
    },
    input: {
        height:40,
        borderColor:'#ddd',
        borderWidth:1,
        marginBottom:10,
        padding:10,
        borderRadius:5,
    },
    errorText: {
        color:'red',
        marginBottom:5
    }
})
