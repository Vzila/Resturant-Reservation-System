import React, { useState, useEffect } from 'react';
import AuthNavigator from './component/Login/Navigation/AuthNavigator'
import { View, StyleSheet, Dimensions, Button, TextInput } from 'react-native';
import { Alert,  Text} from 'react-native';
import { 
  Image,

   

  Platform,
  
  StatusBar,
  
} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import Home from './component/home/Home';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
const logo = require("./222.png");
const Separator = () => (
  <View style={styles.separator} />
);
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const Log = () => {
  const [initializing, setInitializing] = useState(true);
  const { colors } = useTheme();
  const [user, setUser] = useState();
  const [varify, setvarify] = useState(false);
  const currentUser = auth().currentUser;
const [state, setstate] = useState(1)
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
useEffect(() => {

  let xyz=new Date();
  var day = 60 * 60 * 24 * 1000*1;
  var date=(new Date(xyz.getTime() + day).toString()).slice(0,15)
  firestore().collection("DailyData").doc(date).set({ table: [
    {
        "id": "1",
         "tableType": "couple",
         "busy": false,
     },
     {
         "id": "2",
        "tableType": "couple",
        "busy": false,
    },
    {
        "id": "3",
        "tableType": "couple",
        "busy": false,
    },
    {
        "id": "4",
        "tableType": "couple",
        "busy": false,
    },
    {
        "id": "5",
        "tableType": "couple",
        "busy": false,
    },
    {
        "id": "6",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "7",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "8",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "9",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "10",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "11",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "12",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "13",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "14",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "15",
        "tableType": "family",
        "busy": false,
    },
    {
        "id": "16",
        "tableType": "large",
        "busy": false,
    },
    
],
reservTable1:[],
reservTable2:[],
reservTable3:[],
reservTable4:[],
reservTable5:[],
reservTable6:[],
reservTable7:[],
reservTable8:[],
reservTable9:[],
reservTable10:[],
reservTable11:[],
reservTable12:[],
reservTable13:[],
reservTable14:[],
reservTable15:[],
reservTable16:[],
})

}, [])
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    firestore().collection("users").doc(currentUser?.uid).onSnapshot(e => { setvarify(e.data()) })
    return subscriber;
  }, []);
  const Rty = () => {

    const updateDB=()=>{
      setstate(state+1)
      firestore().collection("users").doc(currentUser?.uid).update({ access: true })
    }
    const [user, setUser] = useState();
    const [dummy, setDummy] = useState(true);
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(curUser => setUser(curUser));
      return subscriber; // unsubscribe on unmount
    });

    useEffect(() => {
      const interval = setInterval(async () => {
        setDummy(!dummy);
        try {
          if (user) {
            await user.reload();
          }
        } catch (error) {
          console.log(error);
        }
      }, 10);
      return () => clearInterval(interval);
    });
  
    const logOut = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }
    return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
      <View>
        <Image
         style={{
            resizeMode: "contain",
           
          }}
            style={styles.logo}
            source={logo}
        />
    </View>
    <Animatable.View 
          style={[styles.footer, {
              backgroundColor: colors.background
          }]}
          animation="fadeInUpBig"
      >
          <Text style={[styles.text_footer, {
                color: colors.text
            }]}>EMAIL-VERIFY</Text>
            
            <View style={styles.action}>
                <FontAwesome 
                    name="check-circle"
                    color={colors.text}
                    size={30}
                />
                 <Text style={styles.kd}>
        {user
          ? user.emailVerified
            ? updateDB()
            : 'Not verified'
          : 'User unavailable'}
          </Text>
     
                    </View>
                    <View >
            <Separator />
            <Button
               title="Log-Out"
               onPress={logOut}
                color="#152238"
               
            />
            <Separator />
            <Separator />
             <Button
               title="Resend-Mail"
               onPress={async () => { await auth().currentUser.sendEmailVerification().catch(err => Alert.alert(err.code, err.message)) }}
                color="#152238"
               
            />
            </View>
       
        </Animatable.View>
        
         
         
      </View>
     
    
    </View>)
  }
  if (initializing) return null;

  return (
    
    <NavigationContainer >  
      {user ? 
       (auth().currentUser.emailVerified) ? <Home /> :<Rty />
      : <AuthNavigator />}
    </NavigationContainer>
  )
}

const App = () => {
  return (<Log />);
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#152238'
  },
  header: {
      flex: 5,
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingBottom: 10
  },
  footer: {
      flex: 4,
      backgroundColor: '#ffff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingHorizontal: 50,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 20
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      
      paddingLeft: 5,
      color: '#05375a',
  },
 
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width:'45%',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo: {
      justifyContent: 'center',
      alignSelf: 'center',
      width: 300,
      height: 300,
      
      
      
  },
  kd:{
    fontSize:20,
    fontWeight: "bold"
  }
});







// const EmailVerScreen = (props) => {
//   const [user, setUser] = React.useState();
//   const [dummy, setDummy] = React.useState(true);

//   React.useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(curUser => setUser(curUser));
//     return subscriber; // unsubscribe on unmount
//   });

//   React.useEffect(() => {
//     const interval = setInterval(async () => {
//       setDummy(!dummy);
//       try {
//         if (user) {
//           await user.reload();
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   });

//   return (
//     <View>
//       <Text>{`Dummy is ${dummy ? 'True' : 'False'}`}</Text>
//       <Text>
//         {user
//           ? user.emailVerified
//             ? 'Verified'
//             : 'Not verified'
//           : 'User unavailable'}
//       </Text>
//     </View>
//   );
// };