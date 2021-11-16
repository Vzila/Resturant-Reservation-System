import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, ImageBackground } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { ActivityIndicator, Avatar, Title, Caption, TouchableRipple, useTheme } from 'react-native-paper';

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const LargeImg = ({ route }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', }}
        >
            <ImageBackground
                style={{ width: screenWidth, height: screenWidth }}

                source={{ uri: route.params.item}} />
        </View>
    )
}
export { LargeImg }
const GalleryData = ({ navigation }) => {
    const [state, setstate] = useState([])
    const [load, setload] = useState(true);

    useEffect(async () => {
        await firestore().collection('Gallary').doc('img').onSnapshot((e) => { setstate(e.data().data); setload(false) })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            {(load) ? (<ActivityIndicator />) : (<>
                <FlatList
                    horizontal={false}
                    numColumns={3}
                    data={state}
                    renderItem={({ item }) => (<TouchableOpacity onPress={() => (navigation.navigate('LargeImg', img = { item }))}><Image
                        style={{ flex: 1, width: screenWidth / 2.950, height: screenWidth / 3, marginLeft: 0.3, marginBottom: 0.3 }}
                        source={{ uri: item }}
                    /></TouchableOpacity>)}
                    keyExtractor={item => item}
                />
            </>)}
        </View>
    )
}

export default GalleryData

const styles = StyleSheet.create({})
