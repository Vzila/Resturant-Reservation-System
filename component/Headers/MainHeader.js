import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Linking,Alert } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';

const HeaderL = () => {
    return (
        <View style={{ flex: 2, flexDirection: 'row' }}>
          
           
        </View>
    )
}
export { HeaderL };

const HeaderR = () => {
    const checkURL=async()=>{
        const url="https://www.google.com/maps/search/?api=1&query=restofood";
        const isRight=await Linking.canOpenURL(url);
        await Linking.openURL(url);            

        // if (isRight) {
        //     await Linking.openURL(url);            

        // }
        // else{
        //     Alert.alert("Invalid URL")
        // }
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row', marginRight: 20}}>
            <TouchableOpacity onPress={checkURL}><Foundation name="map" size={30}/></TouchableOpacity>

        </View>
    )
}
export { HeaderR };

const styles = StyleSheet.create({})