import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,FlatList ,TouchableOpacity} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Separator = () => (
    <View style={styles.separator} />
  );
const Reserved = ({navigation}) => {
    const [Records, setRecords] = useState([])
    const [load, setload] = useState(true);
    useEffect(() => {
        const uid = auth().currentUser.uid;
        firestore().collection("Reservation").doc(uid).onSnapshot(e => { setload(false); setRecords(e.data().reserved) })
      }, [])
      const Templet = (props) => {
        var x = new Date(props.i1.timestamp.seconds * 1000 + props.i1.timestamp.nanoseconds / 1000000).toString()
        return (
          <View >
      
            <Card style={{ borderWidth: 0.7, backgroundColor: '#fff', flex: 10, marginTop: 0.5 }}>
              <Card.Content style={{ flexDirection: 'row' }}>
                <Separator />
      
                <Text>{x}</Text>
                <Separator />
              </Card.Content>
            </Card>
      
          </View>
        )
      }
    return (
            
        <View style={styles.container}>

      <View style={styles.tasksWrapper}>

        
        <Separator />
        <View style={styles.items}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
            <FlatList
                data={Records}
                renderItem={({ item, index }) => (<TouchableOpacity onPress={() => navigation.navigate('ReservDetail', { data: item })} ><Templet i1={item} /></TouchableOpacity>)}
                keyExtractor={(index) => index}
              />

            </View>
          </View>
        </View>
      </View>
    </View>
    )
}

export default Reserved

const styles = StyleSheet.create({

      container: { flex: 5, backgroundColor: '#152238' },
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
        backgroundColor: '#152238',
    
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
})
