import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export function ResetPasswordScreen ({ session, navigation }) {

    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {}

        if(password != confirmPassword) errors.confirmPassword = 'Password does not match'
        if(!password) errors.password = 'Password is required'
        if(!confirmPassword) errors.confirmPassword = 'Please confirm password'

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            setPassword('')
            setConfirmPassword('')
            setErrors({}) 
        }
    }

    async function resetPassword({ password }) {
        validateForm()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.header}>New Password</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.input} placeholder="Enter Password" value={password} onChangeText={setPassword} secureTextEntry />
                    {
                        errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null
                    }
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput style={styles.input} placeholder="Enter Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                    {
                        errors.confirmPassword ? (<Text style={styles.errorText}>{errors.confirmPassword}</Text>) : null
                    }
                    <Button title='Reset Password' onPress={() => resetPassword({ password })} />
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
