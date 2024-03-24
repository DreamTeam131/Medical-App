import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Input ({
                    label,
                    onChangeHandler,
                    validate,
                    errorMessage,
                    errorColor = 'red',
}) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder={`Enter ${label}`}
                    onChangeText={onChangeHandler}
                    onEndEditing={validate}
                />
            </View>
            <Text style={{color: errorColor}}>{errorMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        marginLeft: 4
    },
    inputBox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
    },

})

export default Input;
