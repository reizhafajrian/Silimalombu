import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import { IMGBG } from '../Assets';
import ButtonChoice from '../Components/SimpleComponents/ButtonChoice/ButtonChoice';
import Logo from '../Components/SimpleComponents/Logo/Logo';
import TextTitle from '../Components/SimpleComponents/TextTitile/TextTitle';
import {colors} from '../Utils/Colors/colors';
export default function Home() {
  console.log(colors);
  return (
    <SafeContainer>
        <Image source={IMGBG} style={{position:"absolute",top:103,right:0}}/>
      <Logo />
      <View style={{height:26}}/>

      <TextTitle text={'Where do you want to go?'} />
      <View style={{height:36}}/>
      <TextStandard>
      Categories
      </TextStandard>
      <View style={{height:26}}/>
      <WrapperButton>
        <ButtonChoice  type={`Scan`} />
        <ButtonChoice  type={`Event`} />
        <ButtonChoice  type={`Alam`} />
      </WrapperButton>
    </SafeContainer>
  );
}

const SafeContainer = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  padding: 16px;
`;
const WrapperButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const TextStandard=styled.Text`
font-size:18px;
font-weight:600;
`
