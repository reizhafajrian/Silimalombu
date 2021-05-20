import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import styled from 'styled-components';
import {IMGBG} from '../Assets';
import Scanner from '../Components/ComplexComponents/Scanner/Scanner';
import ButtonCardEvent from '../Components/SimpleComponents/ButtonCardEvent/ButtonCardEvent';
import ButtonChoice from '../Components/SimpleComponents/ButtonChoice/ButtonChoice';
import Logo from '../Components/SimpleComponents/Logo/Logo';
import TextTitle from '../Components/SimpleComponents/TextTitle/TextTitle';
import {colors} from '../Utils/Colors/colors';
export default function Home({navigation}) {
  return (
    <SafeContainer>
      <View style={{padding: 16}}>
        <Image
          source={IMGBG}
          style={{position: 'absolute', top: 103, right: 0}}
        />
        <Logo />
        <View style={{height: 26}} />

        <TextTitle text={'Where do you want to go?'} />
        <View style={{height: 36}} />
        <TextStandard>Categories</TextStandard>
        <View style={{height: 26}} />
        <WrapperButton>
          <ButtonChoice
            onPress={() => {
              navigation.navigate('Scanner');
            }}
            type={`Scan`}
          />
          <ButtonChoice type={`Event`} />
          <ButtonChoice type={`Alam`} />
        </WrapperButton>
        <FlatList
          data={[0, 1, 3, 4]}
          renderItem={ButtonCardEvent}
          numColumns={2}
          style={{marginTop: 20}}
          columnWrapperStyle={{
            justifyContent: 'space-around',
          }}
        />
      </View>
    </SafeContainer>
  );
}

const SafeContainer = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
const ContainerWrapper = styled.View`
  display: flex;
  background-color: black;
  flex-direction: row;
  justify-content: space-around;
`;
const WrapperButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const TextStandard = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
