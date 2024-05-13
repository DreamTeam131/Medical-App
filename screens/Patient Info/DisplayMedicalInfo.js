import React, { useCallback } from 'react';
import {useState , useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import { supabase } from '../../lib/supabase'

const DisplayMedical = ({ navigation, route}) => {
    const {id} = route.params;
    const [ fetchError , setFetchError ] = useState(null)
    const [ patient, setPatient ] = useState(null)
    const [ illnessInfo, setIllnessInfo ] = useState([])
    const [ allergyInfo, setAllergyInfo ] = useState([])
    const [medInfo, setMedInfo ] = useState([])

    

    

    useEffect(() => {
        const fetchPatient = async () => {
            const { data , error } = await supabase
            .from('patient_info')
            .select()
            .eq('id', id)
            .single()

            if ( error ) {
                setFetchError('Could not fetch patient')
                setPatient(null)
                console.log(error)
            }
            if ( data ) {
                setAllergyInfo(data.allergy_info)
                setIllnessInfo(data.previous_illness_info)
                setMedInfo(data.medication_info)
                setFetchError(null)
            }
        }
        fetchPatient()
    } , [])

    
    return (
    <ScrollView >
    <View style = {styles.container} >
    {fetchError && (<Text>{fetchError}</Text>)}

    <Text style = {styles.coolStyle}>Previous Illnesses:</Text>
    <Button title= 'Edit Prev Illnesses' onPress={() => navigation.navigate('EditOtherInfo',{id:id})}/>
    {illnessInfo && (
        <View>
        {illnessInfo.map(illnessInfo => (
            <Text key = {Math.floor(Math.random() * 10000)}> {illnessInfo} </Text>
        ))}
        </View>
    )}

    <Text style = {styles.coolStyle}>Allergies:</Text>
    <Button title= 'Edit Allergies' onPress={() => navigation.navigate('EditAllergyInfo',{id:id})}/>
    {allergyInfo && (
        <View>
        {allergyInfo.map(allergyInfo => (
            <Text key = {Math.floor(Math.random() * 10000)}  > {allergyInfo} </Text>
        ))}
        </View>
    )}

    <Text style = {styles.coolStyle}>Medications:</Text>
    <Button title= 'Edit Medications' onPress={() => navigation.navigate('EditMedicationInfo',{id:id})}/>
    {medInfo && (
        <View>
        {medInfo.map(medInfo => (
            <Text key = {Math.floor(Math.random() * 10000)}> {medInfo} </Text>
        ))}
        </View>
    )}
    </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    coolStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },

});

export default DisplayMedical
