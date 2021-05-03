import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainStack from './src/Router/MainStack/MainStack';


export default function App() {
  return (
    <NavigationContainer>
     <MainStack/>
    </NavigationContainer>
  );
}
