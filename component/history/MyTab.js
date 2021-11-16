import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from './History';
import Reserved from './Reserved';
import React from 'react'

const Tab = createMaterialTopTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ordered" component={History} />
      <Tab.Screen name="Reserved" component={Reserved} />
    </Tab.Navigator>
  );
}
export default MyTab;