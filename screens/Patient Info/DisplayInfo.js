import React from 'react';
import {useState , useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import { supabase } from '../../lib/supabase'
import PatientCard from '../../lib/PatientCard';

const Display = ({ navigation, route}) => {
    const {id} = route.params;
    const [ fetchError , setFetchError ] = useState(null)
    const [ patient, setPatient ] = useState(null)
    useEffect(() => {
        const fetchPatient = async () => {
            const { data , error } = await supabase
            .from('patient_info')
            .select()
            .eq('id', id)

            if ( error ) {
                setFetchError('Could not fetch patient')
                setPatient(null)
                console.log(error)
            }
            if ( data ) {
                setPatient(data)
                setFetchError(null)
            }
        }
        fetchPatient()
    } , [])

    
    return (
    <ScrollView>
    <View style = {styles.container} >
         {fetchError && (<Text>{fetchError}</Text>)}
        {patient && (
            <View >
                {patient.map(patient => (
                    <Text>
                        <PatientCard key = {patient.id} patient = {patient} />
                    </Text>
                    
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

});

export default Display
