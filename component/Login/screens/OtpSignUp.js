import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,Alert } from 'react-native';
// service

export default OtpSignUp = ({navigation,route}) => {
console.log(route)
    const [ codeArr, setCodeArr ]= useState([])
    const [ number, setNumber ] = useState()
    const [state, setstate] = useState();
    // const code = codeArr.join("")
    const [ confirm, setConfirm ] = useState(null) //if null means no otp message send
    
    const handleCode = (e, index) => {
        const codeArray = [...code]
        codeArray[index] = e
        setCodeArr(codeArray)
    }
    const createUserInDb = () => {
        return firestore().collection('users').doc().set(
            {
                uid:"1",
                fullName:route.params.userName,
                email:route.params.email,
                password:route.params.password
            }
        )
    }
    const _sendOtp = () => {
        if(!number){
            Alert.alert('Error', 'Please Enter number')
        }
        
        auth().signInWithPhoneNumber(number).then(confirmation => setConfirm(confirmation))
        createUserInDb()
    }

    const confirmCode = () => {

        confirm.confirm(codeArr)
        .then(() => {})
        .catch(err => Alert.alert(err.code, err.message))

    }
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Signup with OTP</Text>

            <TextInput
            style={{ borderWidth: 2, width: 250, marginBottom: 5 ,color:'black'}}
                placeholderTextColor="black"
                placeholder= "Enter Number +91 12121 21212"
                value={number}
                onChangeText={e => setNumber(e)}
            />

            <Button
                title= "Send OTP"
                onPress={() => _sendOtp(number)}
            />
            {confirm?<>
            <TextInput
            style={{ borderWidth: 2, width: 250, marginBottom: 5 ,color:'black'}}
            onChangeText={e=>{setCodeArr(e)}}
            />
            <Button
                title= "Verify"
                onPress={confirmCode}
            />
            </>
            :<Text></Text>}
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    code:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'   
    }
})