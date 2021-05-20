import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNaviagtion from '../../BottomNavigation/BottomNavigation';
import Home from '../../Pages/Home';
import Scanner from '../../Components/ComplexComponents/Scanner/Scanner';

export default function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
