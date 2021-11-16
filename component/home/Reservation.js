import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useIsFocused } from "@react-navigation/native";
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const Two = (props) => {
    return (
        <View>
            <Text style={[styles.top, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            <Text style={[styles.table2, { opacity: props.tb.busy ? 0.5 : 1 }]}><Image style={{ height: 23, width: 23 }} source={require('../../assets/images/table/i1.jpg')} /></Text>
            <Text style={[styles.bottom, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
        </View>
    )
}
const Four = (props) => {
    // console.log("f", props.st)

    return (
        <View>
            <Text style={[styles.top, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            <View style={[styles.table4, { opacity: props.tb.busy ? 0.5 : 1 }]}><Text style={{ textAlign: 'center', marginTop: 6 }}><Image style={{ height: 20, width: 20 }} source={require('../../assets/images/table/tab1.jpg')} /></Text></View>
            <Text style={[styles.bottom, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            <Text style={[styles.left, { opacity: props.tb.busy ? 0.5 : 1 }]} ></Text>
            <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
        </View>
    )
}
const Large = (props) => {
    // console.log("l", props.st)

    return (
        <View>
            <View style={{ flexDirection: 'row', left: -2 }}>
                <Text style={[styles.top, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.top, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            </View>
            <View >
                <View style={[styles.lrg, { opacity: props.tb.busy ? 0.5 : 1 }]}>
                    <Image style={{ height: 35, width: 35, opacity: 0.7 }} source={require('../../assets/images/table/flr.jpg')} />
                </View>
            </View>
            <View style={{ right: -60, top: -175, }}>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.rleft, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            </View>
            <View style={{ right: 0, top: -335 }}>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={{ marginVertical: 5 }}></Text>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={{ marginVertical: 5 }}></Text>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={{ marginVertical: 5 }}></Text>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={{ marginVertical: 5 }}></Text>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={{ marginVertical: 5 }}></Text>
                <Text style={[styles.right, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            </View>
            <View style={{ flexDirection: 'row', top: -349, left: -2 }}>
                <Text style={[styles.bottom, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
                <Text style={[styles.bottom, { opacity: props.tb.busy ? 0.5 : 1 }]}></Text>
            </View>
        </View>
    )
}
const Reservation = ({ navigation, route }) => {
    const [timeDate, settimeDate] = useState(new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime())
    const [load, setload] = useState(true);
    const [load1, setload1] = useState(true);
    const isFocused = useIsFocused();
    const [tableInfo, settableInfo] = useState([]);
    const [holderdata, setholderdata] = useState()
    const [status, setstatus] = useState({ reservTable1: [], reservTable2: [], reservTable3: [], reservTable4: [], reservTable5: [], reservTable6: [], reservTable7: [], reservTable8: [], reservTable9: [], reservTable10: [], reservTable11: [], reservTable12: [], reservTable13: [], reservTable14: [], reservTable15: [], reservTable16: [] })
    useEffect(() => {
        firestore().collection('DailyData').doc(route.params.date).onSnapshot(e => {
            settableInfo(e.data().table);
            setstatus({ reservTable1: e.data().reservTable1, reservTable2: e.data().reservTable2, reservTable3: e.data().reservTable3, reservTable4: e.data().reservTable4, reservTable5: e.data().reservTable5, reservTable6: e.data().reservTable6, reservTable7: e.data().reservTable7, reservTable8: e.data().reservTable8, reservTable9: e.data().reservTable9, reservTable10: e.data().reservTable10, reservTable11: e.data().reservTable11, reservTable12: e.data().reservTable12, reservTable13: e.data().reservTable13, reservTable14: e.data().reservTable14, reservTable15: e.data().reservTable15, reservTable16: e.data().reservTable16 })
            setload(false)
        })
    }, [isFocused])
    const timeing = () => {
        var timeString = route.params.time.toString().slice(16, 25);
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        timeString = route.params.date + " " + timeString
        return timeString
    }
    const timeconfig = (props) => {
        var timeString = props.toString().slice(16, 25);
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        timeString = route.params.date + " " + timeString
        return timeString
    }
    useEffect(() => {
        var holderTime = { t1: null, t2: null, t3: null, t4: null, t5: null, t6: null, t7: null, t8: null, t9: null, t10: null, t11: null, t12: null, t13: null, t14: null, t15: null, t16: null }

        if (!load) {
            if (!status.reservTable1.length == 0) {
                var conflict = status.reservTable1.map((e) => {
                    console.log(e.payment)
                    if (e.payment && (e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t1 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[0].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[0].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[0].busy = false)
            }
            if (!status.reservTable2.length == 0) {
                var conflict = status.reservTable2.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t2 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[1].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[1].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[1].busy = false)
            }
            if (!status.reservTable3.length == 0) {
                var conflict = status.reservTable3.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t3 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[2].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[2].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[2].busy = false)
            }
            if (!status.reservTable4.length == 0) {
                var conflict = status.reservTable4.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t4 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[3].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[3].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[3].busy = false)
            }
            if (!status.reservTable5.length == 0) {
                var conflict = status.reservTable5.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t5 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[4].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[4].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[4].busy = false)
            }
            if (!status.reservTable6.length == 0) {
                var conflict = status.reservTable6.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t6 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[5].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[5].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[5].busy = false)
            }
            if (!status.reservTable7.length == 0) {
                var conflict = status.reservTable7.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t7 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[6].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[6].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[6].busy = false)
            }
            if (!status.reservTable8.length == 0) {
                var conflict = status.reservTable8.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t8 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[7].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[7].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[7].busy = false)
            }
            if (!status.reservTable9.length == 0) {
                var conflict = status.reservTable9.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t9 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[8].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[8].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[8].busy = false)
            }
            if (!status.reservTable10.length == 0) {
                var conflict = status.reservTable10.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t10 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[9].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[9].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[9].busy = false)
            }
            if (!status.reservTable11.length == 0) {
                var conflict = status.reservTable11.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t11 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[10].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[10].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[10].busy = false)
            }
            if (!status.reservTable12.length == 0) {
                var conflict = status.reservTable12.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t12 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[11].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[11].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[11].busy = false)
            }
            if (!status.reservTable13.length == 0) {
                var conflict = status.reservTable13.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t13 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[12].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[12].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[12].busy = false)
            }
            if (!status.reservTable14.length == 0) {
                var conflict = status.reservTable14.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t14 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[13].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[13].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[13].busy = false)
            }
            if (!status.reservTable15.length == 0) {
                var conflict = status.reservTable15.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t15 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[14].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[14].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[14].busy = false)
            }
            if (!status.reservTable16.length == 0) {
                var conflict = status.reservTable16.map((e) => {
                    if ((e.payment && e.timestamp <= timeDate && timeDate <= e.timestamp + 60 * 60000) || (e.timestamp - 60 * 60000 <= timeDate && e.timestamp >= timeDate) && e.payment) {
                        holderTime.t16 = "This table is booked for " + timeconfig(new Date(e.timestamp)) + " to " + timeconfig(new Date(e.timestamp + 60 * 60000))
                        return true
                    }
                    else {
                        return false
                    }
                })
                var conflictCalc = conflict.filter(e => e === true)
                if (conflictCalc && conflictCalc.length !== 0) {
                    settableInfo({ ...tableInfo }, tableInfo[15].busy = true)
                }
                else {
                    settableInfo({ ...tableInfo }, tableInfo[15].busy = false)
                }
            }
            else {
                settableInfo({ ...tableInfo }, tableInfo[15].busy = false)
            }

            setload1(false)

        }
        setholderdata(holderTime)
    }, [load, isFocused])

    useEffect(() => {
        if (!load1) {
            console.log(holderdata)
            firestore().collection('DailyData').doc(route.params.date).update({ table: tableInfo });
        }
    }, [load1, isFocused])
    function tableData(props) {
        settableInfo({ ...tableInfo }, tableInfo[props.id - 1].busy = !tableInfo[props.id - 1].busy);
        var tempdata = { holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }
        switch (props.id) {
            case "1":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable1: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "2":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable2: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "3":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable3: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "4":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable4: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "5":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable5: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "6":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable6: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "7":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable7: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "8":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable8: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "9":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable9: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "10":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable10: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "11":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable11: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "12":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable12: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "13":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable13: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "14":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable14: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "15":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable15: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
            case "16":
                firestore().collection('DailyData').doc(route.params.date).update({ reservTable16: firestore.FieldValue.arrayUnion({ holder: auth().currentUser.uid, timestamp: new Date(`${route.params.date} ${route.params.time.toString().slice(16, 25)}`).getTime(), payment: false }) })
                break;
        }
        navigation.navigate('ReservationDetails', { table: props, alldata: tempdata, date: route.params.date });
    }
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}><TouchableOpacity onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'DatePicker' }],
            }
            )}><Text>👈select time</Text></TouchableOpacity><Text style={{ marginRight: 10 }}>{timeing()}</Text></View>
            {load1 ? (<ActivityIndicator />) : (
                <View style={{ paddingHorizontal: 40, backgroundColor: '#e5e5e5', margin: 5, borderRadius: 5, borderColor: 'silver', borderWidth: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginRight: 20 }}>
                            <TouchableOpacity disabled={tableInfo[0].busy} onPress={() => tableData(tableInfo[0])} ><View style={{ margin: 10, marginLeft: -20 }}><Two tb={tableInfo[0]} st={status.reservTable1} tm={route.params.time.getTime()} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[1].busy} onPress={() => tableData(tableInfo[1])}><View style={{ margin: 10, marginLeft: -20 }}><Two tb={tableInfo[1]} st={status.reservTable2} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[2].busy} onPress={() => tableData(tableInfo[2])}><View style={{ margin: 10, marginLeft: -20 }}><Two tb={tableInfo[2]} st={status.reservTable3} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[3].busy} onPress={() => tableData(tableInfo[3])}><View style={{ margin: 10, marginLeft: -20 }}><Two tb={tableInfo[3]} st={status.reservTable4} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[4].busy} onPress={() => tableData(tableInfo[4])}><View style={{ margin: 10, marginLeft: -20 }}><Two tb={tableInfo[4]} st={status.reservTable5} /></View></TouchableOpacity>
                        </View>
                        <View style={{ flexWrap: 'wrap', }}>
                            <TouchableOpacity disabled={tableInfo[5].busy} onPress={() => tableData(tableInfo[5])}><View style={{ margin: 20 }}><Four tb={tableInfo[5]} st={status.reservTable6} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[6].busy} onPress={() => tableData(tableInfo[6])}><View style={{ margin: 20 }}><Four tb={tableInfo[6]} st={status.reservTable7} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[7].busy} onPress={() => tableData(tableInfo[7])}><View style={{ margin: 20 }}><Four tb={tableInfo[7]} st={status.reservTable8} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[8].busy} onPress={() => tableData(tableInfo[8])}><View style={{ margin: 20 }}><Four tb={tableInfo[8]} st={status.reservTable9} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[9].busy} onPress={() => tableData(tableInfo[9])}><View style={{ margin: 20 }}><Four tb={tableInfo[9]} st={status.reservTable10} /></View></TouchableOpacity>
                        </View><View style={{ flexWrap: 'wrap', }}>
                            <TouchableOpacity disabled={tableInfo[10].busy} onPress={() => tableData(tableInfo[10])}><View style={{ margin: 20 }}><Four tb={tableInfo[10]} st={status.reservTable11} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[11].busy} onPress={() => tableData(tableInfo[11])}><View style={{ margin: 20 }}><Four tb={tableInfo[11]} st={status.reservTable12} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[12].busy} onPress={() => tableData(tableInfo[12])}><View style={{ margin: 20 }}><Four tb={tableInfo[12]} st={status.reservTable13} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[13].busy} onPress={() => tableData(tableInfo[13])}><View style={{ margin: 20 }}><Four tb={tableInfo[13]} st={status.reservTable14} /></View></TouchableOpacity>
                            <TouchableOpacity disabled={tableInfo[14].busy} onPress={() => tableData(tableInfo[14])}><View style={{ margin: 20 }}><Four tb={tableInfo[14]} st={status.reservTable15} /></View></TouchableOpacity>
                        </View>
                        <View style={{ flexWrap: 'wrap', }}>
                            <TouchableOpacity disabled={tableInfo[15].busy} onPress={() => tableData(tableInfo[15])}><View style={{ margin: 20, marginTop: 170 }}><Large tb={tableInfo[15]} st={status.reservTable16} /></View></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ bottom: 780 }}>
                        <View style={{
                            height: 30, width: 30, backgroundColor: 'silver', marginLeft: 295, borderColor: 'gray', borderWidth: 1, borderRadius: 20, borderLeftWidth: 5,
                            borderRightWidth: 5, borderTopWidth: 8, borderBottomWidth: 0, zIndex: 1, marginTop: 3
                        }}></View>
                        <Text style={{ height: 60, width: 100, backgroundColor: 'silver', borderColor: 'gray', borderWidth: 1, marginLeft: 260, borderBottomLeftRadius: 70, borderBottomRightRadius: 70, textAlign: 'center', marginTop: -10 }}>
                            <View style={{ height: 25, width: 50, backgroundColor: '#e5e5e5', borderColor: 'gray', borderWidth: 1, marginLeft: 210, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopWidth: 0 }}>
                            </View>
                        </Text>
                        <Text style={{ height: 70, width: 10, backgroundColor: 'silver', left: 355, borderColor: 'gray', borderWidth: 1 }}></Text>
                    </View>
                    <View style={{ bottom: 500 }}>
                        <Text style={{ height: 6, width: 60, backgroundColor: 'silver', left: 0, top: 79, borderColor: 'gray', borderWidth: 1, zIndex: 1 }}></Text>
                        <Text style={{ height: 6, width: 40, backgroundColor: 'silver', left: 322, top: 75, borderColor: 'gray', borderWidth: 1, zIndex: 1 }}></Text>
                        <Text style={{ height: 140, width: 263, backgroundColor: 'silver', borderColor: 'gray', borderWidth: 1, marginLeft: -40, marginTop: 70 }}></Text>
                        <Text style={{ height: 140, width: 140, backgroundColor: 'silver', borderColor: 'gray', borderWidth: 1, marginLeft: 222, marginTop: -140 }}></Text>
                    </View>
                </View>)}</SafeAreaView>
    )
}

export default Reservation

const styles = StyleSheet.create({
    top: {
        margin: 5,
        backgroundColor: '#a5a5a5',
        height: 30,
        width: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4f55',
        borderTopWidth: 10,
        borderLeftWidth: 5,
        borderRightWidth: 5
    },
    bottom: {
        margin: 5,
        backgroundColor: '#a5a5a5',
        height: 30,
        width: 30,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4f55',
        borderBottomWidth: 10,
        borderLeftWidth: 5,
        borderRightWidth: 5
    },
    left: {
        marginLeft: 27,
        marginTop: -57,
        backgroundColor: '#a5a5a5',
        height: 30,
        width: 30,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4f55',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 10
    },
    right: {
        marginLeft: -18,
        marginTop: -30,
        backgroundColor: '#a5a5a5',
        height: 30,
        width: 30,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4f55',
        borderTopWidth: 5,
        borderLeftWidth: 10,
        borderBottomWidth: 5
    },
    table2: {
        marginBottom: -20,
        marginTop: -20,
        marginLeft: 2.5,
        backgroundColor: 'gray',
        height: 35,
        width: 35,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        zIndex: 1,
        textAlign: 'center',
    },
    table4: {
        marginBottom: -20,
        marginTop: -20,
        marginLeft: -3,
        backgroundColor: 'gray',
        height: 45,
        width: 45,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        zIndex: 1,
    },
    lrg: {
        marginBottom: -20,
        marginTop: -20,
        marginLeft: -3,
        backgroundColor: 'gray',
        height: 200,
        width: 80,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rleft: {
        margin: 1,
        backgroundColor: '#a5a5a5',
        height: 30,
        width: 30,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4f55',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderRightWidth: 10
    },


})
