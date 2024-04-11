import React from 'react';
import {useState , useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase'
import PatientEmergencyCard from '../../lib/PatientEmergencyCard';

const EmergencyContact = ({navigation}) => {
    const [ fetchError , setFetchError ] = useState(null)
    const [ patient, setPatient ] = useState(null)
    useEffect(() => {
        const fetchPatient = async () => {
            const { data , error } = await supabase
            .from('userData')
            .select()

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
<View style = {styles.container} >
        {fetchError && (<Text>{fetchError}</Text>)}
        {patient && (
            <View >
                {patient.map(patient => (
                    <Text>
                        <PatientEmergencyCard key = {patient.user_id} patient = {patient} />
                    </Text>
                ))}
            </View>
        )}
        
    </View>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        
    },

});
export default EmergencyContact