import React, { useState } from 'react'
import { TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, StyleSheet, Text, Button, Alert } from 'react-native';
import { 
    View, Image,
     
  
    Platform,
    
    StatusBar,
    
} from 'react-native';
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
const logo = require('../222.png');
const DatePicker = ({navigation}) => {
    const { colors } = useTheme();
    const Separator = () => (
        <View style={styles.separator} />
      );
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setisTimePickerVisible] = useState(false)
    const [time, setTime] = useState("Enter Time :  :  :  AM/PM")
    const [date, setDate] = useState("Enter Date :  /  /  ")
    const handleConfirmDate = (tempDate) => {
        setDate(tempDate.toString().slice(0, 15))
        setDatePickerVisibility(false)
    };
    const handleConfirmTime = (tempTime) => {
        setTime(tempTime);
        setisTimePickerVisible(false);
    };
    const timeing=(time) => {
        if (time==="Enter Time :  :  :  AM/PM"){
            return "Enter Time :  :  :  AM/PM"
        }
        else{
        var timeString = time.toString().slice(16, 25);
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        timeString = h + timeString.substr(2, 3) + ampm;
        return timeString    }
    }
    const finalDT=()=>{
        if(date==="Enter Date :  /  /  ")
        Alert.alert("Enter Date ")
        else if(time==="Enter Time :  :  :  AM/PM")
        Alert.alert("Enter Time")
        else{
            navigation.navigate('Reservation',{date:date,time:time})
        }
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
    <Separator />
        <Text style={styles.text_header}>ᴛᴀᴋᴇ ᴛʜᴇ ᴛɪᴍᴇ ᴛᴏ ᴍᴀᴋᴇ ʏᴏᴜʀ ꜰᴏᴏᴅ ᴅᴇʟɪᴄɪᴏᴜꜱ... </Text>
        <Separator />

            
        </View>
        
        <Animatable.View
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
         
       
         <View style={styles.container}>
         <Text style={styles.dk} >Select Slot:- </Text>
         <Separator />
       
        
        
            <TouchableOpacity onPress={()=>(setDatePickerVisibility(true))}><TextInput style={styles.txt} editable={false} placeholder={date}/></TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress={() => (setisTimePickerVisible(true))}><TextInput style={styles.txt} editable={false} placeholder={timeing(time)} /></TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                display='spinner'
                minimumDate={new Date(new Date().getTime() + 86400000)}
                maximumDate={new Date(new Date().getTime() + (86400000*7))}
                onConfirm={handleConfirmDate}
                onCancel={()=>(setDatePickerVisibility(false))}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                display='spinner'
                onConfirm={handleConfirmTime}
                onCancel={()=>(setisTimePickerVisible(false))}
            />
            <TouchableOpacity onPress={finalDT}><Text style={styles.innerText}> Reservation</Text></TouchableOpacity>
            </View>
            </Animatable.View>
            
            </View>
        
        
       
    )
}

export default DatePicker;

const styles = StyleSheet.create({
    container: {
      flex: 6, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 3,
        backgroundColor: '#152238',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily:'ComicSansBold',
        fontSize: 30
    },
    dk: {
        color: '#152238',
        fontWeight: 'bold',
        fontFamily:'ComicSansBold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
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
        color: '#fff',
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
    innerText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "#152238",
        padding: 10,
        margin: 2,
        borderRadius: 30,
        marginTop:40


      },
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      logo: {
        justifyContent: 'center',
        
    alignSelf: "center",
    height:200,
            width:200
    
    
        
        
        
    },
  });