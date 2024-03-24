import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Input from '../components/Input'

export default function AddNewPatientScreen({ navigation }) {
    const [values, setValues] = useState();
    function onChange(text, field){
        setValues({...values, [field]: text})
    }

    return (
        <View style={{padding: 20, backgroudColor: '#d9d9d9'}}>
            <Input
                label='First Name'
                name='first'
                onChangeHandler={text => onChange(text, 'first')}
            />
            <Input
                label='Middle Name'
                name='middle'
                onChangeHandler={text => onChange(text, 'middle')}
            />
            <Input
                label='Last Name'
                name='last'
                onChangeHandler={text => onChange(text, 'last')}
            />
            <Input
                label='Date of Birth'
                name='dob'
                onChangeHandler={text => onChange(text, 'dob')}
            />
            <Input
                label='Blood Type'
                name='bloodType'
                onChangeHandler={text => onChange(text, 'bloodType')}
            />

        </View>
    )
}