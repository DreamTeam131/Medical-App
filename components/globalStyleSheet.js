import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    loginTextInput: {
        height:40,
        width:300,
        borderColor:'#ddd',
        borderWidth:1,
        marginTop:10,
        padding:5,
        //alignItems:'center'
    },
    loginContainer: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        alignItems:'center'
    },
    loginButton: {
        alignItems:'center',
    },

    homeContainer: {  //style for 'home' page container
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {  //style for custom button
        backgroundColor: '#666',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        margin: 4
    },

    buttonText: { //style for custom button text
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    }

});