import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Home';
import Detail from './Detail';
import {NavigationContainer} from '@react-navigation/native';
import TravelEvent from './TravelEvent';
import PlaceOfTravel from './PlaceOfTravel';

const Tab = createMaterialTopTabNavigator();
// export const TopTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen component={Home} />
//       <Tab.Screen component={Detail} />
//     </Tab.Navigator>
//   );
// };


export default function Event() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Tab.Navigator>
        <Tab.Screen component={TravelEvent} name="Travel Event" />
        <Tab.Screen component={PlaceOfTravel} name="Place of Travel" />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
// const Container = styled.view``;
