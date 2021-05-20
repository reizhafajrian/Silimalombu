import React from 'react';
import {View, Text} from 'react-native';
import CardEvent from '../Components/SimpleComponents/CardEvent/CardEvent';
import TextInputComponent from '../Components/SimpleComponents/TextInput/TextInput';

export default function PlaceOfTravel() {
  return (
    <View style={{flex: 1, padding: 30}}>
      <TextInputComponent />
      <CardEvent />
      <CardEvent />
      <CardEvent />
    </View>
  );
}
