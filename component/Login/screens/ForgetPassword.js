import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Button, TextInput } from 'react-native';
import { ScrollView,  Text, Alert } from 'react-native';
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
import auth from '@react-native-firebase/auth';
const { width, height } = Dimensions.get('window');
const logo = require('../222.png');


export default Login = ({ navigation }) => {

    const [email, setEmail] = useState()
    const { colors } = useTheme();
const Separator = () => (
    <View style={styles.separator} />
  );
    const forgetPassword = () => {
        if(!email){
            Alert.alert('Error', 'Please enter email')
        }
    
         auth().sendPasswordResetEmail(email);
         navigation.navigate('Login');
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
         
         
      </View>
     
      <Animatable.View 
          style={[styles.footer, {
              backgroundColor: colors.background
          }]}
          animation="fadeInUpBig"
      >
          <Text style={[styles.text_footer, {
                color: colors.text
            }]}>EMAIL</Text>
            
            <View style={styles.action}>
                <FontAwesome 
                    name="google"
                    color={colors.text}
                    size={30}
                />
                 <TextInput 
                     style={{ borderWidth: 2, width: 250, marginBottom: 5}}
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
                    <View >
            <Separator />
            <Button
               title="Forget Password"
               onPress={forgetPassword}
                color="#152238"
               
            />
            </View>
       
        </Animatable.View>
        </View>
    )
}

const height_logo = height * 0.28;
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
  });