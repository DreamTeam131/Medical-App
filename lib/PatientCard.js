import { View , Text , StyleSheet} from "react-native"

const PatientCard = ({patient}) => {
return (

    <View className = 'PatientCard'>
        <Text style ={styles.bigTitle}> Name: </Text>
        <Text style = {styles.regularText}>{patient.first_name}</Text>
        <Text style = {styles.regularText}>{patient.middle_name}</Text>
        <Text style = {styles.regularText}>{patient.last_name}</Text>
        <Text style ={styles.bigTitle}> Date of Birth: </Text>
        <Text style = {styles.regularText}>{patient.date_of_birth}</Text>
        <Text style ={styles.bigTitle}> Contact Info: </Text>
        <Text style = {styles.miniTitle}>Home Phone:</Text>
        <Text style = {styles.regularText}>{patient.home_phone}</Text>
        <Text style = {styles.miniTitle}>Mobile Phone:</Text>
        <Text style = {styles.regularText}>{patient.mobile_phone}</Text>
        <Text style = {styles.miniTitle}>Email Address:</Text>
        <Text style = {styles.regularText}>{patient.email_address}</Text>

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

export default PatientCard