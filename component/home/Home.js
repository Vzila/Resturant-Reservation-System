import React from 'react';
import { StyleSheet,StatusBar, Text, View, Image, TouchableOpacity, ActivityIndicator,Animated, Dimensions, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { FirstScreen, FourthScreen, HeaderMain, SecoundScreen, ThirdScreen } from '../Screenconfig';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <>
      <Tab.Navigator screenOptions={{ header: () => false,activeTintColor: '#42f44b'}}
      
      
      
     
      >
        <Tab.Screen name="Reservation1" component={FirstScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-business" color={color} size={size} />
          ),
          title: "Reservation"
        }} />
      
        <Tab.Screen name="Menu1" component={SecoundScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
          
          title: "Menu"
        }}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
          }} />
        <Tab.Screen name="History" component={ThirdScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
          title: "History"
        }} />
        <Tab.Screen name="Profile" component={FourthScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: "Profile"
        }} />
      </Tab.Navigator>

    </>
  )
}
const styles = StyleSheet.create({

});