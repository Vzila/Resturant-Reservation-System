import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Headers, ScrollView, FlatList, Touchable, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
let { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Story = (props) => {
  return (
    <View style={{ margin: 5 }}>
      <Image source={{ uri: props.i1.im }} style={{ borderRadius: 60, width: screenWidth / 4.5, height: screenWidth / 4.5 }} />
      <Text style={{ textAlign: 'center', fontSize: 15 }}>{props.i1.name}</Text>
    </View>
  )
}
const Crd = (props) => {
  return (
    <View style={{ backgroundColor: 'white', borderRadius: 10, marginLeft: 3, marginTop: 5 }}>
      <Image source={{ uri: props.i1.im }} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, width: screenWidth / 3.1, height: screenWidth / 2.8 }} />
      <Text style={{ textAlign: 'center', fontSize: 15, padding: 10 }}>{props.i1.name}</Text>
    </View>
  )
}
export default function Menu({ navigation }) {
  const [menuData, setmenuData] = useState([]);
  const [menuData1, setmenuData1] = useState([]);

  const [load, setload] = useState(true);
  useEffect(() => {
    firestore().collection('Menu').doc('menuId').onSnapshot(e => { setmenuData(e.data().menuData); setload(false) })
    firestore().collection('Menu').doc('menuId1').onSnapshot(e => { setmenuData1(e.data().menuData);  })

  }, [])
  return (<View >
    {(load) ? (<ActivityIndicator />) : (<>
      <ScrollView>
        <View style={{ backgroundColor: '#fafafa' }}>
          <Text style={styles.tagTxt}>Packegs</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={menuData}
            renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate('MenuDetails', { menulist: item, data: menuData })} ><Story i1={item} /></TouchableOpacity>)}
            keyExtractor={item => item.id}
          /></View>
        <View>
          <Text style={[styles.tagTxt, { marginTop: 10 }]}>Dishes</Text>
          <FlatList
            horizontal={false}
            numColumns={3}
            data={menuData1}
            renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate('MenuDetails', { menulist: item, data: menuData })}><Crd i1={item} /></TouchableOpacity>)}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </>)}
  </View>)
}
const styles = StyleSheet.create({
  tagTxt: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 5
  }
})
