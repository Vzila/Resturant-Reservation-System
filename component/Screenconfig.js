import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile/Profile';
import myProfiledata from './menu/Menu';
import Menu from './menu/Menu';
import MenuDetails from './menu/MenuDetails';
import History from './history/History';
import OrderDetails from './history/OrderDetails';
import Reservation from './home/Reservation';
import ReservationDetails from './home/ReservationDetails';
import { HeaderL, HeaderR } from './Headers/MainHeader';
import GalleryData, { LargeImg } from './Headers/GalleryData';
import BillConform from './menu/BillConform';
import DatePicker from './home/DatePicker';
import MyProfile from './profile/Screens/MyProfile';
import AboutUs from './profile/Screens/AboutUs';
import ContactUs from './profile/Screens/ContactUs';
import ImageChange from './profile/Screens/ImageChange';
const Stack1 = createNativeStackNavigator();
import MyTab from './history/MyTab'
import ReservDetail from './history/ReservDetail';
const FirstScreen = () => {
    return (
        <Stack1.Navigator  >
            <Stack1.Screen name="DatePicker" component={DatePicker}
                options={{ title: 'Select sloat', headerTitleAlign: 'center', headerLeft: () => (<Text style={{ marginLeft: -20, marginTop: -30 }}><HeaderL /></Text>), headerRight: () => (<Text><HeaderR /></Text>) }}
            />
            <Stack1.Screen name="Reservation" component={Reservation} options={{ title: 'Select sloat', headerTitleAlign: 'center', headerLeft: () => (<Text style={{ marginLeft: -20, marginTop: -30 }}><HeaderL /></Text>), headerRight: () => (<Text><HeaderR /></Text>) }}
            />
            <Stack1.Screen name="ReservationDetails" component={ReservationDetails} />
        </Stack1.Navigator>
    )
}
export { FirstScreen }

const Stack2 = createNativeStackNavigator();
const SecoundScreen = () => {
    return (
        <Stack2.Navigator>
            <Stack2.Screen name="Menu" component={Menu} options={{ headerTitleAlign: 'center', headerLeft: () => (<Text style={{ marginLeft: -20, marginTop: -30 }}><HeaderL /></Text>), headerRight: () => (<Text><HeaderR /></Text>) }} />
            <Stack2.Screen name="MenuDetails" component={MenuDetails} />
            <Stack2.Screen name="BillConform" component={BillConform} />
        </Stack2.Navigator>
    )
}
export { SecoundScreen }

const Stack3 = createNativeStackNavigator();
const ThirdScreen = () => {
    return (
        <Stack3.Navigator >
            <Stack3.Screen name="History" component={MyTab} options={{ headerTitleAlign: 'center', headerLeft: () => (<Text style={{ marginLeft: -20, marginTop: -30 }}><HeaderL /></Text>), headerRight: () => (<Text><HeaderR /></Text>) }} />
            <Stack3.Screen name="OrderDetails" component={OrderDetails} />
            <Stack3.Screen name="ReservDetail" component={ReservDetail} />
        </Stack3.Navigator>
    )
}
export { ThirdScreen }

const Stack4 = createNativeStackNavigator();
const FourthScreen = () => {
    return (
        <Stack4.Navigator>
            <Stack4.Screen name="Profile" component={Profile} options={{ headerTitleAlign: 'center', headerLeft: () => (<Text style={{ marginLeft: -20, marginTop: -30 }}><HeaderL /></Text>), headerRight: () => (<Text><HeaderR /></Text>) }} />
            <Stack4.Screen name="myProfile" component={MyProfile} />
            <Stack4.Screen name="LargeImg" component={LargeImg} />
            <Stack4.Screen name="GallaryData" component={GalleryData} />
            <Stack4.Screen name="aboutUs" component={AboutUs} />
            <Stack4.Screen name="contactUs" component={ContactUs} />
            <Stack4.Screen name="ImageChange" component={ImageChange} />
        </Stack4.Navigator>
    )
}
export { FourthScreen }

const styles = StyleSheet.create({})
