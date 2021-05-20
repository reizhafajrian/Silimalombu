import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TabTop=()=>{

    return(
        <Tab.Navigator>
            <Tab.Screen component={TravelEvent}/>
            <Tab.Screen component={PlaceOfTravel} />
        </Tab.Navigator>
    )
}


export default function Event() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
const Container=styled.view`


`