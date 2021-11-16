import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Alert,ImageBackground } from 'react-native'
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
import { Platform,  Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Avatar, Title, Caption, TouchableRipple,  } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
const Separator = () => (
    <View style={styles.separator} />
  );


const MyProfile = ({ route, navigation }) => {
    const [fname, setfname] = useState(route.params.profile.fname)
    const [lname, setlname] = useState(route.params.profile.lname)
    const [username, setusername] = useState(route.params.profile.userName)
    const [email, setemail] = useState(route.params.profile.email)
    const [phone, setphone] = useState(route.params.profile.number)
    const [profile, setprofile] = useState()
    const [path, setpath] = useState()
    const [upLoading, setupLoading] = useState(false)
    const [load, setload] = useState(true);
    
    const [status, setstatus] = useState(null)
    const { colors } = useTheme();
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    
    const [image, setImage] = useState('https://download.flaticon.com/download/icon/147144?icon_id=147144&author=1&team=1&keyword=Avatar&pack=147128&style=3&style_id=23&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq25LW0ipUbhb82rkfBAKTcjxiuByUB9WsrEYM8MsZRFyBO5B53t-1LWYTYNg8p2BHQ_D-giooCUzumM6V1x62Dtx7zngHRJhbJJYcJW8UUNLJNkOqywkGEDkrcJA1jsCTvnT24kDPJnoTT3H-Mbgd26OPY9hKJ3N_JAuzdlWfx6qpRw_lMG7OwbmUBH8zOzj-yYtlXJIiIdiBOMZuvHRr8E3RcoO4FxavFJjGwAjaOraJdpPpR3JCqEAhMee47-X7xNlKAp4sM5i8RwEu-AWlb9gK2VxBDvCLlUyKCzfn7MTUCSqm4riaiGDJ7749H4yXcrQutedEKIb83o1AIodkUoGCKofL82Vm7_nCCc7ud9hUVSP1mDHqDzbpgXiDLToqhG58b2GlSzUlsWMZaqT3cQTYX1JaM92L_h_OjtLpEdsGVGe1pNwMt2EBEdLsYKgY8LYK9PbakgH--CV8M9p9VswHdpWUF6k10Ib-vKW2ALZ1YIP8XMrv00vcC0Y5hp9OJKSn6mqetd_F_9aruCcOFOB6uTI3Y-fzIDSjAgp1K_d5Pib-zRSvIARUbswe4JNCWXsic3IkwgrR1sEzUkMVc1NjY1ZLWYyENkwWb0-ZjMm1boE-JRVQk7HzcT3a9pc0JnqAvIObI2pHtiq3PQH5ZeEVEoPIg4YaG8cw32uHWR9TqXcuCaTQ7v0hRTFrQBfJLitn5XLOMyTk0uiaJ5eT01fg2jT2qgzWDB54swb6RWln53afzxgWrdn3yLy_FxWT5r2eelETDtU8FFRW2xnIBosNGo0AJdc-Z3mdv9mf6egJsQl4EBPigqzR9k_nQ4f37RcRUQ2-T1UwJkQILwtpQ6Vf5yCnCWIz68er8OHtCEdFf7FWkXQHaa5B_q-NfBtAN__Wl0HajzL__c9hzqVXVQBqjPnieMsEFG2acnAikQwwFlCqk7RDdhqoLw2XcLathh4UmQoy3afkXHBd_T_aoGR_KmWrwRpaEKlaXgAFkPHiHgdemJygxSssVU732A0p-54AK1-D9py_ZP_TY6wr4ZTMpWgC9V_JSW7xtAdxjUZJdcAyPqi7DYgauxHVik3MCvkwSVU-jodhPpqiMci4vzzln4ZA-12oraGXyhrVoPTgbTbOZyMypW-x1blA6-hsSF9KNE_9hzFdWUnnvVJGx0hzVsP_kcErXcS0AJMuuerc8HSONxtOby6TGkzzcjN3P0gcA7_KMoZatj1XvrMJOztlC-d_gKtlZylF-otMwR1txRwW6Gh4P7tbt0Kqur1BCUbSFQe_4QydGaGaBFDT_c-fvPlSw&_gl=1*yddli0*test_ga*MTI0OTA1NzEyNS4xNjM1OTU5MzA2*test_ga_523JXC6VL7*MTYzNTk1OTMwNy4xLjEuMTYzNTk1OTM1NS4xMg..*_ga*MTI0OTA1NzEyNS4xNjM1OTU5MzA2*_ga_3Q8LH3P0VP*MTYzNTk1OTMwNy4xLjEuMTYzNTk1OTM1Ni4w');
    const saveChange = async () => {
        await firestore().collection("users").doc(auth().currentUser.uid).update({
            fname: fname, lname: lname, userName: username, phone: phone
        })
        navigation.navigate('Profile')
    }
    const lowerScreen = () => (
      <View style={styles.panel}>
         <View style={{alignItems: 'center'}}>
         <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={imageFromGallary}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={imageFromCamara}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    
          <Text>hii</Text>
          <Button title="Take Image from Camara" onPress={imageFromGallary} />
          <Button title="Take Image from Gallary" onPress={imageFromCamara} />
          <Button title="Cancle" onPress={() => { bs.current.snapTo(1) }} />
      </View>
  )
  const lowerHeader = () => (
    <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  
      {(status===null)          
      ?<View>
      
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
    
    return (
        <View style={styles.container}>
           <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={lowerScreen}
        renderHeader={lowerHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
     
            <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                
              <ImageBackground
                source={{
                  uri: image,
                }}
                
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                 
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          {fname + " " +lname}
          </Text>
          </View>
          
          <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={fname}
                onChangeText={e => setfname(e)}
            
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={lname}
            onChangeText={e => setlname(e)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="user-check" color={colors.text} size={20} />
          <TextInput
            placeholder="User-name"
            placeholderTextColor="#666666"
            value={username}
            onChangeText={e => setusername(e)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="mail" color={colors.text} size={20} />
          <TextInput
            placeholder="Mail"
            placeholderTextColor="#666666"
            value={email}
            onChangeText={e => { console.log(e); setemail(e) }}
                editable={false}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={phone}
               
                onChangeText={e => setphone(e)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={saveChange}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
        
      
        
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2, width: screenWidth - screenWidth / 10, marginBottom: 5, color: 'black'
    },
    container: {
        flex: 1,
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#152238',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
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
        fontSize: 14,
        color: 'gray',
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
      action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
      separator: {
        marginVertical: 11,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});
