import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export default function ButtonCardEvent() {
  return (
    <Container>
      <ContainerText>
        <TextTitle fontWeight={700}>Sunset Silimalombu</TextTitle>
        <TextTitle fontWeight={400}>Rp 300.000</TextTitle>
      </ContainerText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  background-color: black;
  width: 156px;
  height: 156px;
  max-height: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const ContainerText = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  margin-left: 10px;
`;
const TextTitle = styled.Text`
  color: white;
  font-weight: ${props => props.fontWeight};
  font-size: 12px;
`;
