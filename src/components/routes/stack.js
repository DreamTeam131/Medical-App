import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/login';
import Home from '../../screens/homeScreen/homePage';
import ForgotPassword from '../../screens/forgotPassword/forgotPassword';
import Register from '../../screens/signUp/register';
import AddNewPatientScreen from "../../screens/AddNewPatientScreen";
const Stack = createNativeStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='forgotPassword' component={ForgotPassword}/>
                <Stack.Screen name='register' component={Register}/>
                <Stack.Screen name='Add New Patient' component={AddNewPatientScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}