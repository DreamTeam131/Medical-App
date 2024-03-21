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
        alignItems:'center'
    }
});