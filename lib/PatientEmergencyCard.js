import { View , Text , StyleSheet} from "react-native"

const PatientEmergencyCard = ({patient}) => {
return (

    <View className = 'PatientEmergencyCard'>
        <Text style ={styles.bigTitle}> Contact Name: </Text>
        <Text style ={styles.regularText}>{patient.emergency_contact_first_name} </Text>
        <Text style ={styles.regularText}>{patient.emergency_contact_last_name}</Text>
        <Text style ={styles.bigTitle}> Contact Number: </Text>
        <Text style ={styles.regularText}>{patient.emergency_contact_number}</Text>

    </View>
)

}
const styles = StyleSheet.create({
    bigTitle: {
        borderWidth: 5,
        borderColor: '#20232a',
        borderRadius: 10,
        backgroundColor: '#61dafb',
        overflow: 'hidden',
        marginTop: 50,
        flexWrap: 'wrap',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 80,
    },
    miniTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    regularText: {
        textAlign: 'center',

    },

});

export default PatientEmergencyCard