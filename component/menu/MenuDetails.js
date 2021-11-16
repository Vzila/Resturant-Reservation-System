import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

const Data = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between',backgroundColor: "#152238",color:'#fff', padding: 20, margin: 2,paddingRight:30}}>
            <View><Text style={{ fontSize: 20,color:'#fff'}}>{props.data.name}</Text></View>
            <View>
            <Text><Text style={{ fontSize: 20,color:'#fff'}}>{props.data.quantity}/</Text><Text style={{ fontSize: 20,color:'#fff'}}>Rs.{props.data.price}</Text><Fontisto name={props.data.isselected ? "checkbox-active" : "checkbox-passive"} size={20} color='#fff'/></Text></View>
        </View>
    )
}
const MenuDetails = ({ route, navigation }) => {
    const [load, setload] = useState(true);
    const [list, setlist] = useState([]);
    const [order, setorder] = useState([])
    const isFocused = useIsFocused();

    const checkHandle = (index) => {
        setlist({ ...list }, list.list[index].isselected = !list.list[index].isselected)
    }
   
    ;
    // navigation.goBack();
    useEffect(() => {
        setlist(route.params.menulist);
        setload(false);
        if(order){setorder([])}
    }, [isFocused])

    function orderHandler() {
        navigation.navigate('Menu');
    }
    const filterOrder = () => {
        route.params.data.map((e) => {
            e.list.map((ec) => {
                if (ec.isselected === true) {
                    setorder(order.push(ec))
                }
            })
        })
    }
    const st1=(props)=>{
        console.log(list)
        console.warn(props)
        setlist(props)
          }
    const finalOrder = async () => {
        filterOrder()
        navigation.navigate('BillConform', { orderList: order, data: route.params.data,st:st1 ,d1:list});
    }
    return (
        <View style={{ flex: 1 }}>
            {(load) ? (<ActivityIndicator />) : (<>
                <FlatList
                    data={list.list}
                    renderItem={({ item, index }) => (<TouchableOpacity onPress={() => checkHandle(index)}><Data data={item} /></TouchableOpacity>)}
                    keyExtractor={item => item.name}
                />
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={orderHandler}><Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: "#152238", padding: 10,paddingHorizontal:40, margin: 2, borderRadius: 10,color:"#fff" }}>Add to Orderlist</Text></TouchableOpacity>
                <TouchableOpacity onPress={finalOrder}><Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: "#152238", padding: 10,paddingHorizontal:30, margin: 2, borderRadius: 10,color:"#fff" }}>final order</Text></TouchableOpacity></View>
            </>)}
        </View>

    )
}

export default MenuDetails

const styles = StyleSheet.create({})
