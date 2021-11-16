import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Alert, Button, Linking, Dimensions } from 'react-native';
import { Platform,  } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';

const Separator = () => (
    <View style={styles.separator} />
  );

const ReservationDetails = ({ route, navigation }) => {
    const openPaymentApp = async (payApp) => {

        let url = '';
        switch (payApp) {
            case 'PAYTM': url = 'paytmmp://'; break;
            case 'GPAY': url = 'tez://upi/'; break;
            case 'PHONEPE': url = 'phonepe://'; break;
        }
        url = url + 'pay?pa=Khanakhajana@upi&pn=khanakhajana&mc=0000&tr=123456789ABCDEFG&tn=uid&am=100&cu=INR'
        // phonepe://pay?pa=your@vpa&pn=YourName&tn=Note&am=1&cu=INR
        console.log('URL : ', url);
        try {
            await Linking.openURL(url);
        }
        catch (err) {
            Alert.alert("app does not exsist in yout phone")
            console.error('ERROR : ', err);
        }
    }
    const [load, setload] = useState(true);
    const [pay, setpay] = useState({});
    const [status, setstatus] = useState([])
    const [specInfo, setspecInfo] = useState()
    const [temp, settemp] = useState()
    useEffect(() => {
        firestore().collection('DailyData').doc(route.params.date).onSnapshot(e => {
            setstatus({ reservTable1: e.data().reservTable1, reservTable2: e.data().reservTable2, reservTable3: e.data().reservTable3, reservTable4: e.data().reservTable4, reservTable5: e.data().reservTable5, reservTable6: e.data().reservTable6, reservTable7: e.data().reservTable7, reservTable8: e.data().reservTable8, reservTable9: e.data().reservTable9, reservTable10: e.data().reservTable10, reservTable11: e.data().reservTable11, reservTable12: e.data().reservTable12, reservTable13: e.data().reservTable13, reservTable14: e.data().reservTable14, reservTable15: e.data().reservTable15, reservTable16: e.data().reservTable16, table: e.data().table })
        })
        setpay(route.params.alldata)
        setspecInfo(route.params.table)
        setload(false)
    }, [])
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const lowerScreen = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
         <Text style={styles.panelTitle}>PAYMENT</Text>
        <Text style={styles.panelSubtitle}>This payment is for security purpose this amount will be minus from your bill.</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => openPaymentApp('PAYTM')}>
        <Text style={styles.panelButtonTitle}>PAYTM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}  onPress={() => openPaymentApp('GPAY')} >
        <Text style={styles.panelButtonTitle}>G-PAY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}  onPress={() => openPaymentApp('PHONEPE')} >
        <Text style={styles.panelButtonTitle}>PHONE-PAY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>CANCEL</Text>
      </TouchableOpacity>
      
           
        </View>
    )
    const lowerHeader = () => (
        <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
        </View>
    )
    const bookPay = async () => {
        const uid = auth().currentUser.uid

        switch (route.params.table.id) {
            case "1":
                status.reservTable1.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "2":
                status.reservTable2.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "3":
                status.reservTable3.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "4":
                status.reservTable4.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "5":
                status.reservTable5.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "6":
                status.reservTable6.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break; break;
            case "7":
                status.reservTable7.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "8":
                status.reservTable8.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "9":
                status.reservTable9.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "10":
                status.reservTable10.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "11":
                status.reservTable11.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "12":
                status.reservTable12.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "13":
                status.reservTable13.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "14":
                status.reservTable14.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "15":
                status.reservTable15.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
            case "16":
                status.reservTable16.map((e) => {
                    if (e.holder === pay.holder && e.timestamp === pay.timestamp) {
                        e.payment = true;
                    }
                })
                firestore().collection("DailyData").doc(route.params.date).set({
                    table: status.table,
                    reservTable1: status.reservTable1,
                    reservTable2: status.reservTable2,
                    reservTable3: status.reservTable3,
                    reservTable4: status.reservTable4,
                    reservTable5: status.reservTable5,
                    reservTable6: status.reservTable6,
                    reservTable7: status.reservTable7,
                    reservTable8: status.reservTable8,
                    reservTable9: status.reservTable9,
                    reservTable10: status.reservTable10,
                    reservTable11: status.reservTable11,
                    reservTable12: status.reservTable12,
                    reservTable13: status.reservTable13,
                    reservTable14: status.reservTable14,
                    reservTable15: status.reservTable15,
                    reservTable16: status.reservTable16,
                })
                firestore().collection('Reservation').doc(uid).update(
                    {
                        reserved: firestore.FieldValue.arrayUnion({
                            tableNumber: route.params.table.id,
                            payment: 100,
                            timestamp: firestore.Timestamp.now(), reservationTime: route.params.date
                        })
                    })
                break;
        }        Alert.alert("Your payment Successfull")

        navigation.reset({
            index: 0,
            routes: [{ name: 'DatePicker' }],
        }
        );
    }
    return (
        <View style={styles.container}>

       <View style={styles.tasksWrapper}>
       <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: "600", color: '#fff' }}>Reservation-Details:-
        </Text>

            {(load) ? (<ActivityIndicator />) : (<>
                <Separator />
        <View style={styles.items}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text>table number : {specInfo.id}</Text>
                
                </View>
                </View>
                </View>
                <View style={styles.items}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
            <Text>table type : {specInfo.tableType}</Text>
                
                </View>
                </View>
                </View>
               
                
                
                <TouchableOpacity onPress={bookPay} style={{ fontSize: 20, textAlign: 'center', backgroundColor: "#fff", padding: 10, margin: 20, borderRadius: 30,}}><Text style={{ textAlign: 'center',fontSize: 20 }}>Book</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { bs.current.snapTo(0) }}><Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: "#fff",  padding: 10, margin: 20, borderRadius: 30,}}>  <Icon name="book-account" color="#152238" size={20}/>PAY FOR BOOK</Text></TouchableOpacity>
             
                                
            </>)}
            </View>
            
            
           
            
        
          <View style={styles.container}>
          <BottomSheet
       ref={bs}
       snapPoints={[screenHeight / 2, 0]}
       renderContent={lowerScreen}
       renderHeader={lowerHeader}
       initialSnap={1}
       callbackNode={fall}
       enabledGestureInteraction={true}
     />
     </View>
     </View>
    )
}

export default ReservationDetails

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#152238' },
    navigation: { flex: -10, marginTop: 43, backgroundColor: '#152238', },
    dk: { fontSize: 30, fontWeight: '500', color: '#fff' },
    kd: { fontSize: 18, color: '#152238', justifyContent: 'center', textAlign: 'center', },
    header: {
      flex: -5,
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingBottom: 10
    },
  
    footer: {
      flex: -20,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
  
    },
  
    separator: {
      marginVertical: 11,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
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
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
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
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 10,
        color: '#152238',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#152238',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    
  
  
})

