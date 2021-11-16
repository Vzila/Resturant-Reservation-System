import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Avatar, Title, Caption, TouchableRipple, useTheme } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Profile({ navigation }) {
    const [profile, setprofile] = useState()
    const [path, setpath] = useState()
    const [upLoading, setupLoading] = useState(false)
    const [load, setload] = useState(true);
    
    const [status, setstatus] = useState(null)
    const { colors } = useTheme();
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const myCustomShare = async() => {
    }
    
    const lowerScreen = () => (
        <View style={{ backgroundColor: 'white' }}>
            <Text>hii</Text>
            <Button title="Take Image from Camara" onPress={imageFromGallary} />
            <Button title="Take Image from Gallary" onPress={imageFromCamara} />
            <Button title="Cancle" onPress={() => { bs.current.snapTo(1) }} />
        </View>
    )
    const lowerHeader = () => (
        <View style={{ backgroundColor: 'white' }}>
        {(status===null)          
        ?<View>
        <Text>upload image</Text>
        </View>
        :<Text>{status}"%"</Text>}
        </View>
    )
    const imageFromGallary = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            const img = Platform.OS === 'ios' ? image.sourceURL : image.path
            selectImage(img)
        });
    }
    const imageFromCamara = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            const img = Platform.OS === 'ios' ? image.sourceURL : image.path
            selectImage(img);
        })

    }
    const selectImage = async (img) => {
        const x = img;
        let temppath = x.substring(x.lastIndexOf('/') + 1);
        const extention = temppath.split('.').pop();
        const name = temppath.split('.').slice(0, -1).join('.');
        temppath = name + Date.now() + "." + extention;
        setupLoading(true);
        const task = storage().ref(temppath).putFile(x);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setstatus(Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100)
        });

        task.then(() => {
            console.log('Image uploaded to the bucket!');
        });
        try {
            await task;
            await firestore().collection("users").doc(auth().currentUser.uid).update({ dp: (await (storage().ref(temppath).getDownloadURL()))})
            setupLoading(false)
            setstatus(null)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        firestore().collection('users').doc(auth().currentUser.uid).onSnapshot((e)=>{setprofile(e.data());setload(false)})
    }, [])
    const logOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (<View>
        <ScrollView>
          
            
            {(load) ? (<ActivityIndicator />) : (<>
                <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
       
          <Avatar.Image 
            source={{
              uri: profile.dp
            }}
            size={80}
          />
         
         
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{profile.fname + " " + profile.lname}</Title>
            <Caption style={styles.caption}>@{profile.userName }</Caption>
          </View>
        </View>
      </View>
     
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account-settings" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.fname}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.number}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile.email}</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => (navigation.navigate('myProfile', { profile: profile }))}>
          <View style={styles.menuItem}>
            <Icon name="account-details" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>My Profile</Text>
          </View>
        </TouchableRipple>
        
        
        <TouchableRipple onPress={() => (navigation.navigate('GallaryData'))}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>Gallary</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => (navigation.navigate('aboutUs'))}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>About Us & Share</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={logOut}>
          <View style={styles.menuItem}>
            <Icon name="account-off" color="#152238" size={25}/>
            <Text style={styles.menuItemText}>Log-Out</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Visit</Title>
            <Caption>RestaFood</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Again</Title>
            <Caption>RestaFood</Caption>
          </View>
      </View>

               
            </>)}
        </ScrollView>
    </View>);
}
const styles = StyleSheet.create({
    pbutton: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
    },
    pimg: {
        margin: 20,
        height: 150,
        width: 150,
        borderRadius: 60,
        marginTop: 140
    },
    data: {
        flex: 1
    },
    container: {
        
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 4,
        marginHorizontal: 10,
    },
    txt: {
        fontSize: 23
    },
    container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },

});