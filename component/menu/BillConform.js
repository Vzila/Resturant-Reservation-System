import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert, FlatList, TouchableOpacity, TextInput ,ScrollView,taskItems} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

const BillConform = ({ route, navigation }) => {
    console.log(route.params)
    const [orderList, setorderList] = useState([])
    const [load, setload] = useState(false);
    const [user1, setuser] = useState([])
    const [state, setstate] = useState()
    const finalOrderCall = () => {
        
        console.log(user1)
        setuser({...user1},user1.orderList=[{...user1.orderList},...orderList])
        update()
        Alert.alert('Order Successfully!');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Menu' }],
          }
            );     

    }

    const update = async() => {
        const uid=auth().currentUser.uid
            firestore().collection('order').doc(uid).update(
                {
                    order:firestore.FieldValue.arrayUnion({orderList:orderList,
                    timestamp:firestore.Timestamp.now()})
                })
        
    }
     function cancleData(props) {
        route.params.data.map((e) => {
            e.list.map((ec) => {
                if (ec.name === props.item.name) {
                    ec.isselected = !ec.isselected;
                }
            })
        })
        setstate(props);
        route.params.orderList.splice(props.index, 1)
        setorderList(route.params.orderList)
        route.params.st(route.params.d1)
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
    useEffect(() => {
        setorderList(route.params.orderList)
    }, [])
    function addSuggestion(props) {
        props.suggestions = 'a bit spicy';
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      
      <View style={styles.tasksWrapper}>
     
      <Text style={{ fontSize: 30,textAlign: 'center', fontWeight: "600" }}>ORDER LIST:-
                                </Text>
        
       
        <View style={styles.items}>
        <View style={styles.item}>
      <View style={styles.itemLeft}>
       
        <View style={{ flex: 1.5, textAlign: 'left' }}>
                            <Text >Name</Text>
                        </View>
                        <View style={{ flex: 1.5, textAlign: 'right' }}>
                            <Text style={{ textAlign: 'center' }}>Quantity/Price</Text>
                        </View>
                        {/* <View style={{ flex: 1, textAlign: 'right' }}>
                            <Text style={{ textAlign: 'center' }}>Note</Text>
                        </View> */}
                        <View style={{ flex: 1, textAlign: 'right' }}>
                            <Text style={{ textAlign: 'center' }}>Delete</Text>
                        </View>
      </View>
     
      
    </View>
    <View style={styles.items}>
        <View style={styles.item}>
    <View style={styles.itemLeft}>
    <FlatList
                data={orderList}
                renderItem={({ item, index }) => (
                    <View style={{borderWidth: 0.7}} >
                        
                        <Card style={{ borderWidth: 0.7 }}>
                            <Card.Content style={{ flexDirection: 'row' }}>
                                
                                <View style={{ flex: 4, textAlign: 'left' }}>
                                    <Text >{item.name}</Text>
                                </View>
                                {/* <View>
                                    <TextInput style={{borderWidth:1,color:"black"}}/>
                                </View> */}
                                <View style={{ flex: 1.5, textAlign: 'right' }}>
                                    <Text style={{ textAlign: 'center' }}>{item.quantity}/{item.price}</Text>
                                </View>
                                {/* <View style={{ flex: 1, textAlign: 'right' }}>
                                    <TouchableOpacity onPress={() => addSuggestion(index)}><MaterialIcons name='post-add' size={25} style={{ textAlign: 'center' }} /></TouchableOpacity>
                                </View> */}
                                <View style={{ flex: 1, textAlign: 'right' }}>
                                    <TouchableOpacity onPress={() => cancleData({ index, item })}><MaterialIcons name='cancel' size={25} style={{ textAlign: 'center', color: 'red' }} /></TouchableOpacity>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                )}
                keyExtractor={item => item.name}
            />
        </View>
        </View>
        </View>
        </View>
        <TouchableOpacity onPress={finalOrderCall}><Text style={styles.dk}>Order Now</Text></TouchableOpacity>
      </View>
        
      </ScrollView>

        
        
        </View>
        
    )
}

export default BillConform

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
      itemText: {
        maxWidth: '80%',
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },
      dk: {
        fontSize: 20, textAlign: 'center', backgroundColor: "#152238", padding: 10, margin: 2, borderRadius: 30, 
        color:'#fff'
      },
    });
    
