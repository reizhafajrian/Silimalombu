import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {ICAlam, ICEvent, ICScan} from '../../../Assets';

const width = Dimensions.get('screen').width;
export default function ButtonChoice({type, onPress}) {
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
  const colorGradient = type => {
    let data = [];
    if (type === 'Scan') {
      data = ['#ED673C', '#DFB536'];
    } else {
      data = ['#FFFFFF', '#FFFFFF'];
    }
    return data;
  };

  const checkColor=(type)=>{
      if(type==="Scan"){
          return "#FFFFFF"
      }
      else{
          return "black"
      }
  }
  return (
    <LinearGradient
      colors={colorGradient(type)}
      style={{
        width: (width * 27) / 100,
        height: (width * 27) / 100,
        marginHorizontal: 8,
        borderRadius: 8,
      }}>
      <ContainerButton onPress={onPress}>
   
        {Icon(type)}
        <TextAbsolute color={checkColor(type)}>{type}</TextAbsolute>
  
   
      </ContainerButton>
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
const TextAbsolute=styled.Text`
position:absolute;
bottom:0px;
color:${props=>props.color}
`
