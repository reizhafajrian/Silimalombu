import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styled from 'styled-components';
import {IMGBG} from '../Assets';
import ButtonChoice from '../Components/SimpleComponents/ButtonChoice/ButtonChoice';
import Logo from '../Components/SimpleComponents/Logo/Logo';
import ListEventHome from '../Components/ListComponents/EventHome/ListEventHome';
import {
  TextBoldTitle2PrimaryDark,
  TextBoldTitleBlack,
  TextRegularSubTitlePrimaryDark,
} from '../Components/SimpleComponents/Text/Text';
export default function Home() {
  return (
    <ScrollView>
      <SafeContainer>
        <Image
          source={IMGBG}
          style={{position: 'absolute', top: 103, right: 0}}
        />
        <Logo />
        <View style={{height: 26}} />
        <TextBoldTitle2PrimaryDark text={'Where do\n you want to go?'} />
        <View style={{height: 36}} />
        <TextBoldTitleBlack text={'Categories'} />
        <View style={{height: 26}} />
        <WrapperButton>
          <ButtonChoice type={`Scan`} />
          <ButtonChoice type={`Event`} />
          <ButtonChoice type={`Alam`} />
        </WrapperButton>
        <TextEvent>
          <TextBoldTitleBlack text={'New Event'} />
          <TextRegularSubTitlePrimaryDark text={'See All'} />
        </TextEvent>
        <ListEventHome />
      </SafeContainer>
    </ScrollView>
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

const TextEvent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35;
  alignItems: center;
`;
