import React from "react";
import {View, Text, Pressable} from "react-native";
import {globalStyles} from "../../components/globalStylesheet";

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.homeContainer}>
            <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Add New Patient')}>
                <Text style={globalStyles.buttonText}>add new patient</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>search for patient</Text>
            </Pressable>

        </View>
    )
}