import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Button, Text,Alert } from 'react-native';
import { 
     
  
    Platform,
    
    StatusBar,
    
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: '147431559675-u08ov51blgqqflhl8k02hfvifjebv7m0.apps.googleusercontent.com',
});
const { width, height } = Dimensions.get('window');
import firestore from '@react-native-firebase/firestore'
export default SignUp = ({ navigation }) => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [number, setnumber] = useState()
    const { colors } = useTheme();
    const Separator = () => (
        <View style={styles.separator} />
      );
    const createUserInDb = async (uid,access) => {
        firestore().collection('order').doc(uid).set({})
        firestore().collection('Reservation').doc(uid).set({})
        const dp = `https://firebasestorage.googleapis.com/v0/b/rrs1-c1267.appspot.com/o/avtar.jpg?alt=media&token=bacda8f8-1bab-42bc-b758-d0e8ea9c553e`;
        return firestore().collection('users').doc(uid).set(
            {
                uid,
                userName,
                email,
                access,
                dp,
                fname,
                lname,
                number
            }
        )
    }

    // signup handling
    const signUp = async() => {
        if (!userName || !email || !password || !fname || !lname || !number) {
            Alert.alert('Error', 'Please enter all fields')
        }

        auth().createUserWithEmailAndPassword(email, password)
            .then(cred => {
                const { uid } = cred.user;

                auth().currentUser.updateProfile({
                    displayName: userName
                })
                auth().currentUser.sendEmailVerification().catch(err => Alert.alert(err.code, err.message))
                createUserInDb(uid, auth().currentUser.emailVerified)
            })
            .catch(
                err => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                    else
                        Alert.alert(err.code, err.message)
                }
            )
    }

    // async function onGoogleButtonPress() {
    //     const { idToken } = await GoogleSignin.signIn();
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //     return auth().signInWithCredential(googleCredential);
    // }
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#000000' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to RF!</Text>
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>REGISTER</Text>
            
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="FIRST NAME"
                    placeholderTextColor="#666666"
                    placeholder="First Name"
                    value={fname}
                    onChangeText={e => setfname(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                    <View style={styles.action}>
                <FontAwesome 
                    name="user-plus"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="LAST NAME"
                    placeholderTextColor="#666666"
                    placeholder="Last Name"
                value={lname}
                onChangeText={e => setlname(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                    <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="USER NAME"
                    placeholderTextColor="#666666"
                    placeholder="User Name"
                value={userName}
                onChangeText={e => setUserName(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                    
                    <View style={styles.action}>
                <FontAwesome 
                    name="google"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="EMAIL"
                    placeholderTextColor="#666666"
                    placeholder="Email"
                    value={email}
                    onChangeText={e => setEmail(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                    <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="PASSWORD"
                    placeholderTextColor="#666666"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={e => setPassword(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                    <View style={styles.action}>
                <FontAwesome 
                    name="phone"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="PHONE NUMBER"
                    placeholderTextColor="#666666"
                    placeholder="Phone Number"
                    value={number}
                    onChangeText={e => setnumber(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>

                    
        
          
           
          
            
           

           

            <Button
                onPress={signUp}
                title="Sign Up"
                color="#152238"
            />
            <Separator />
            <Button
                title="Have an account? Login"
                onPress={() => navigation.navigate('Login')}
                color="#152238"
            />
            {/* <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            /> */}

        
        </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#152238'
    },
    header: {
        flex: 1,
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
        fontSize: 10
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
  });