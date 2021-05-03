import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Account from '../Pages/Account';

import Home from '../Pages/Home';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}