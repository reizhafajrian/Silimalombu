import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {ICAlam, ICEvent, ICScan} from '../../../Assets';

const width = Dimensions.get('screen').width;
export default function ButtonChoice({type,onPress}) {
  const Icon = type => {
    switch (type) {
      case 'Scan':
        return <ICScan />;
      case 'Event':
        return <ICEvent />;
      case 'Alam':
        return <ICAlam />;
    }
  };
  const colorGradient = (type) => {
    let data = [];
    if (type === 'Scan') {
      data = ['#ED673C', '#DFB536'];
    } else {
      data = ['#FFFFFF', '#FFFFFF'];
    }
    return data;
  };

  return (
    <LinearGradient
      colors={colorGradient(type)}
      style={{
        width: (width * 20) / 100,
        height: (width * 20) / 100,
        marginHorizontal: 8,
        borderRadius: 8,
      }}>
      <ContainerButton onPress={()=>alert(type)} >{Icon(type)}</ContainerButton>
    </LinearGradient>
  );
}
const ContainerButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #f4f4f4;
`;
