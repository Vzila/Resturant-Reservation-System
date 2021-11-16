import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';

const Data = () => {
    useEffect(() => {
        const removeData = async () => {
            try {
                await AsyncStorage.clear();
            } catch (error) {
                console.log(error);
            }
        }
        // removeData()
    }, [])


    const setData = async () => {

        try {
            var user = {
                table: [
                    {
                        "id": "1",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "2",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "3",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "4",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "5",
                        "tableType": "couple",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "6",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "7",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "8",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "9",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "10",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "11",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "12",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "13",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "14",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "15",
                        "tableType": "family",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    },
                    {
                        "id": "16",
                        "tableType": "large",
                        "busy": false,
                        "reservation":[
                            {"holder":"",
                            "timestamp":""}
                        ]
                    }
                ],
            }
            await AsyncStorage.setItem('Reservation', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
        try {
            var user = {
                user: [
                    {
                        "id": "1",
                        "username": "keyur_gondaliya403",
                        "password": "......",
                        "fname": "Keyur",
                        "lname": "Gondaliya",
                        "phone": "123123123",
                        "email": "gondaliya1317@gmail.com",
                        "img": "require('../../assets/images/profile.jpeg')",
                        "points": "100",
                        "orderList":[]
                    }
                ],
            }
            await AsyncStorage.setItem('Userdata', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
        try {
            var user = {
                menuData :[{
                    id: '1',
                    name: 'Gujarati',
                    im: require("../../assets/images/Gujarati/i1.jpg"),
                    list : [
                        { name: "Gujarati thadi", isselected: false ,price:190,suggestions:'',quantity:'full'},
                      { name: "Gathiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Fafda", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Papadi", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Naylon Gathiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
                      { name: "Ghi jalebi", isselected: false ,price:50,suggestions:'',quantity:'100gm'},
                      { name: "Methi Bhajiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Mix Bhajiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
                      { name: "Bateka Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
                      { name: "Marcha Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
                      { name: "Naylon khaman", isselected: false ,price:25,suggestions:'',quantity:'100gm'},
                      { name: "Vatidal khaman", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
                      { name: "Chips", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
                      { name: "Methina thepla", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
                      { name: "Butter thepla", isselected: false ,price:30,suggestions:'',quantity:'3 peace'},
                      { name: "Sukibhaji", isselected: false ,price:20,suggestions:'',quantity:'3 peace'},
                      { name: "Dahi", isselected: false ,price:15,suggestions:'',quantity:'100gm'},
                      { name: "Rajvadi Chhas", isselected: false ,price:10,suggestions:'',quantity:'100 ml'},
                    ]
                  },
                  {
                    id: '2',
                    name: 'Panjabi',
                    im: require("../../assets/images/Panjabi/mcms.jpg"),
                    list: [
                      { name: "a2", isselected: false,price:100,suggestions:'',quantity:'' },
                      { name: "b2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h2", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i2", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '3',
                    name: 'Chainese',
                    im: require("../../assets/images/Chainese/logo.jpg"),
                    list:[
                      { name: "a3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h3", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i3", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '4',
                    name: 'FastFood',
                    im: require("../../assets/images/FastFood/i1.jpg"),
                    list:[
                      { name: "a4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h4", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i4", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '5',
                    name: 'SouthIndian',
                    im: require("../../assets/images/SouthIndian/download.jpg"),
                    list: [
                      { name: "a5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h5", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i5", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '6',
                    name: 'Desert',
                    im: require("../../assets/images/Dasert/d1.jpg"),
                    list: [
                      { name: "a6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h6", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i6", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                  {
                    id: '7',
                    name: 'Cold Drinks',
                    im: require("../../assets/images/ColdDrinks/cd1.jpeg"),
                    list: [
                      { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
                      { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
                    ]
                  },
                ]
            }
            await AsyncStorage.setItem('Menudata', JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }        
    }
    
    setData();
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Data

const styles = StyleSheet.create({})

// firestore()
//   .collection('Table')
//   .doc('tableId')                                       //table
//   .set({data:[
//       {
//           "id": "1",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "2",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "3",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "4",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "5",
//           "tableType": "couple",
//           "busy": false
//       },
//       {
//           "id": "6",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "7",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "8",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "9",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "10",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "11",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "12",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "13",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "14",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "15",
//           "tableType": "family",
//           "busy": false
//       },
//       {
//           "id": "16",
//           "tableType": "large",
//           "busy": false
//       }
//     ]})
//   .then(() => {
//     console.log('User added!');
//   });


//   .then(() => {
//     console.log('User added!');
//   });

// firestore()
// .collection('Menu')
// .doc('menuId1')
// .set({menuData :[{
//   id: '1',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2FSemiya-Upma-Recipe-e1622646713756.jpg?alt=media&token=df1464fc-0124-4b9c-aebf-bc295d24dd14',
//   list : [
//       { name: "Gujarati thadi", isselected: false ,price:190,suggestions:'',quantity:'full'},
//     { name: "Gathiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//     { name: "Fafda", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//     { name: "Papadi", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//     { name: "Naylon Gathiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
//     { name: "Ghi jalebi", isselected: false ,price:50,suggestions:'',quantity:'100gm'},
//     { name: "Methi Bhajiya", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//     { name: "Mix Bhajiya", isselected: false ,price:35,suggestions:'',quantity:'100gm'},
//     { name: "Bateka Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
//     { name: "Marcha Bhajiya", isselected: false ,price:30,suggestions:'',quantity:'100gm'},
//     { name: "Naylon khaman", isselected: false ,price:25,suggestions:'',quantity:'100gm'},
//     { name: "Vatidal khaman", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
//     { name: "Chips", isselected: false ,price:40,suggestions:'',quantity:'100gm'},
//     { name: "Methina thepla", isselected: false ,price:20,suggestions:'',quantity:'100gm'},
//     { name: "Butter thepla", isselected: false ,price:30,suggestions:'',quantity:'3 peace'},
//     { name: "Sukibhaji", isselected: false ,price:20,suggestions:'',quantity:'3 peace'},
//     { name: "Dahi", isselected: false ,price:15,suggestions:'',quantity:'100gm'},
//     { name: "Rajvadi Chhas", isselected: false ,price:10,suggestions:'',quantity:'100 ml'},
//   ]
// },
// {
//   id: '2',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2F210211143233-28-classic-italian-dishes.jpg?alt=media&token=d4597818-d6b6-44c7-8645-e9abce933d62',
//   list: [
//     { name: "a2", isselected: false,price:100,suggestions:'',quantity:'' },
//     { name: "b2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h2", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i2", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '3',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fdih4ifhg_pasta_625x300_22_April_20.webp?alt=media&token=a31c38aa-9c69-4f79-9a4e-eeaf4eb566ab',
//   list:[
//     { name: "a3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h3", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i3", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '4',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fdish-story_647_081417052301.jpg?alt=media&token=3ff5581d-b8cd-4323-83e0-9897005b1965',
//   list:[
//     { name: "a4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h4", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i4", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '5',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Ffc20fbcfe5cd4690ba0cb9614192303a.jpg?alt=media&token=ee4f2abb-b357-4d10-99e7-4aeaabaa0b14',
//   list: [
//     { name: "a5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h5", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i5", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '6',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimage.jpg?alt=media&token=f667c5c6-3d75-4b95-85ae-67e45104ee1f',
//   list: [
//     { name: "a6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h6", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i6", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '7',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(1).jpg?alt=media&token=894aa406-6dc4-48ae-a58a-63e8b7bd2d1a',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '8',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(10).jpg?alt=media&token=c412d573-f3e7-4502-a511-67e1c1b3a4a1',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '9',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(11).jpg?alt=media&token=7bfe3bca-6121-4ca1-8f0f-26084d00d517',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '10',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(12).jpg?alt=media&token=9fb3b6fd-4c99-405d-a532-819756aa5a56',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '11',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(2).jpg?alt=media&token=286087ef-b8ac-4900-bd69-4a5e796691d7',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '12',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(3).jpg?alt=media&token=d354441a-8c96-4a99-bddd-ae410ca2b08b',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '13',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(4).jpg?alt=media&token=f82411d0-9f80-42e7-837b-70ca904ab478',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '14',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(5).jpg?alt=media&token=de4cd3a1-5d80-47de-b33e-154008ce7448',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '15',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(6).jpg?alt=media&token=a9972dcb-1bab-4ffa-af90-4e03df212376',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '16',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(7).jpg?alt=media&token=6486d48d-1ea5-483e-807b-f5e69fb4bbb8',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '17',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(8).jpg?alt=media&token=34ac11c1-9847-4953-8a3d-1209d0749fd3',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '18',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages%20(9).jpg?alt=media&token=5b4eaeb5-e023-408c-a8f1-56114b6abefa',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '19',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fimages.jpg?alt=media&token=d4a1aea7-2685-4854-85d2-e0e5240945b6',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// {
//   id: '20',
//   name: 'dummy',
//   im:'https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/food%2Fwloska-lazania-zdjecie-ilustracyjne.jpg?alt=media&token=41c64677-4b96-477f-9b8c-a391563dbc4e',
//   list: [
//     { name: "a7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "b7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "c7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "d7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "e7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "f7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "g7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "h7", isselected: false,price:100,suggestions:'',quantity:''},
//     { name: "i7", isselected: false,price:100,suggestions:'',quantity:''},
//   ]
// },
// ]})