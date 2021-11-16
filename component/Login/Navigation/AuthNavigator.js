import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgetPassword, OtpSignUp } from "../screens";
const Stack = createStackNavigator();
// import { SignUp,Login,ForgetPassword,OtpSignUp } from '../screens';
export default AuthNavigator = () => (
    <Stack.Navigator

    >
        <Stack.Screen
            name="SignUp"
            component={SignUp}
        />
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
        />
        <Stack.Screen
            name="OtpSignUp"
            component={OtpSignUp}
        />
    </Stack.Navigator>
)