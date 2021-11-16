import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, TextInput,Alert } from 'react-native';
import { 
    View, Image,
     
  
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
const logo = require('../222.png');

export default Login = ({ navigation }) => {

    const { colors } = useTheme();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const Separator = () => (
        <View style={styles.separator} />
      );
    const signIn = () => {
        if(!email || !password){
            Alert.alert('Error', 'Please enter all fields')
        }
    
        auth().signInWithEmailAndPassword(email, password)
        .then(() => {})
        .catch(
            err => Alert.alert(err.code, err.message)
        )
    }
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View>
        <Image
         style={{
            resizeMode: "contain",
            

            
           
          }}
            style={styles.logo}
            source={logo}
        />
    </View>
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
            }]}>EMAIL</Text>
            
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    placeholder="Email"
                    value={email}
                    onChangeText={e => setEmail(e)}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    />
                    </View>
                     <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={30}
                />
                <TextInput 
                    
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

                <Button
                title="Forget Password"
                onPress={() => navigation.navigate('ForgetPassword')}
                color="#152238"
            />
                
                
           
            <View >
            <Separator />
            <Button
                title="Login"
                color="#152238"
                onPress={signIn}
            />
            </View>
            
            
         
        

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
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
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
        
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 100
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
        
    alignSelf: "center",
    height:250,
            width:250
    
    
        
        
        
    },
  });