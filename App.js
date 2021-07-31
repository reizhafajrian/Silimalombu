import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainStack from './src/Router/MainStack/MainStack';
import Detail from './src/Pages/Detail';
import {Get} from './src/Utils/Api/Api';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
