import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgetPassword, Home, AddProduct, Products } from "../screens";

const Stack = createStackNavigator();
const H1=()=>{}
export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Home" 
            component= {H1}
        />          
        <Stack.Screen 
            name="AddProduct" 
            component= {AddProduct}
        />          
        <Stack.Screen 
            name="Products" 
            component= {Products}
        />          
    </Stack.Navigator> 
)