import React,{useEffect,useState} from 'react'
import { Alert, Button, StyleSheet, Text, View ,Linking} from 'react-native';
const Payment = () => {
const [state, setState] = useState()
openPaymentApp = async (payApp) => {

  let url = '';
  switch(payApp) {
      case 'PAYTM'   : url = 'paytmmp://'; break;
      case 'GPAY'    : url = 'tez://upi/'; break;
      case 'PHONEPE' : url = 'phonepe://'; break;
  }
  url = url + 'pay?pa=Khanakhajana@upi&pn=khanakhajana&mc=0000&tr=123456789ABCDEFG&tn=uid&am=25&cu=INR'
  // phonepe://pay?pa=your@vpa&pn=YourName&tn=Note&am=1&cu=INR
  console.log('URL : ',url);
  try {
      await Linking.openURL(url);
  }
  catch (err) {
    Alert.alert("app does not exsist in yout phone")
      console.error('ERROR : ',err);
  }
}
    return (
        <View >
        <Button title='PAYTM'    onPress={() => openPaymentApp('PAYTM')}/>
            <Button title='GPAY'     onPress={() => openPaymentApp('GPAY')}/>
            <Button title='PHONE PE' onPress={() => openPaymentApp('PHONEPE')}/>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({})
