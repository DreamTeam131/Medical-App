import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, Button, StyleSheet, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert, TouchableOpacity } from "react-native";
import { Session } from '@supabase/supabase-js'
import { supabase } from "../../lib/supabase";

export function CreateAccountScreen ({ session, navigation }) {

    const[loading, setLoading] = useState(true)
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[userInputCode, setUserInputCode] = useState('')
    const[errors, setErrors] = useState({})

    useEffect(() => {
        
        if(session) getProfile()
    }, [session])


    async function createAccount ({ email, password }) {

        try {
            if(!validateForm()){
                return;
            }
          setLoading(true)
    
          let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
          })
    
          if (error) {
            throw error
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          }
        } finally {
          setLoading(false)
        }
    }
    

    const validateForm = () => {
        let errors = {}

        if(userInputCode != '123') errors.userInputCode = "Incorrect code"
        if(!email) errors.email = "Email is required"

        var validator = require("email-validator");
        if(!validator.validate(email)) errors.email = "Please enter a email"

        if(!password) errors.password = "Password is required"
        if(!password) errors.confirmPassword = "Please confirm password"
        if(password != confirmPassword) errors.confirmPassword = 'Password does not match'

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
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.header}>Create Account</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Affiliation Code</Text>
                    <TextInput style={styles.input} placeholder='Enter Code' value={userInputCode} onChangeText={setUserInputCode}/>
                    {
                        errors.userInputCode ? (<Text style={styles.errorText}>{errors.userInputCode}</Text>) : null
                    }
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="email@address.com" value={email} onChangeText={setEmail} autoCapitalize="none" />
                    {
                        errors.email ? (<Text style={styles.errorText}>{errors.email}</Text>) : null
                    }
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry value={password} onChangeText={setPassword}/>
                    {
                        errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null
                    }
                    <Text style={styles.label}>Confirm Passowrd</Text>
                    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>
                    {
                        errors.confirmPassword ? (<Text style={styles.errorText}>{errors.confirmPassword}</Text>) : null
                    }
                    <Button title='Create Account' onPress={() => createAccount({ email, password })} />
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
