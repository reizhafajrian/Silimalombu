import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from '../MainStack/MainStack';

export default function Provider() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
