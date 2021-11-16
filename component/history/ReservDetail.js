import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);
// const Listnow = (props) => {
//   var x = new Date(props.timestamp).toString()
//   console.log(props)
//   return (
//     <View style={styles.container}>

//       <Card style={{ borderWidth: 0.7, backgroundColor: '#f8f8ff', marginTop: 0.5 }}>
//         <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//           <Text >Time :- {x}</Text>
//           <Text >Table number :- {props.tablenumber}</Text>
//           <Text >Payment amount :- {props.payment}</Text>
//           <Text> Reservation time :- {props.reservationTime}</Text>
//         </Card.Content>
//       </Card>

//     </View>
//   )
// }
const ReservDetail = ({route}) => {
    console.log(route.params.data.payment)
    var x = new Date(route.params.data.timestamp.seconds * 1000 + route.params.data.timestamp.nanoseconds / 1000000).toString()
    return (

        <View style={styles.container}>

       <View style={styles.tasksWrapper}>

        <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "600", color: '#fff' }}>{x}:-
        </Text>
        <Separator />
        <View style={styles.items}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
    <Text >Time :- {x}</Text>
    <Text >Table number :- {route.params.data.tablenumber}</Text>
    <Text >Payment amount :- {route.params.data.payment}</Text>
    <Text> Reservation time :- {route.params.data.reservationTime}</Text>
             </View>
           </View>
         </View>
       </View> 
     </View>
    )
}

export default ReservDetail

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
  
  
})
