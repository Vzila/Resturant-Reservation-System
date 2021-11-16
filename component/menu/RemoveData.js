import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RemoveData = async() => {
        try {
            await AsyncStorage.removeItem('tempOrder');
            console.log('Data removed')
        }
        catch (exception) {
            console.log(exception)
        }
        Alert.alert('Order Successfully!');
        navigation.navigate('Menu');
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default RemoveData

const styles = StyleSheet.create({})
