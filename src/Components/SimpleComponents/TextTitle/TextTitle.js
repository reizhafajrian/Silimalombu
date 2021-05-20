import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../Utils/Colors/colors';

export default function TextTitle({text}) {
  return (
    <>
      <TextTitleComponent color={colors.PrimaryDark}>{text}</TextTitleComponent>
    </>
  );
}
const TextTitleComponent = styled.Text`
  font-weight: bold;
  font-size: 23px;
  color: ${props => props.color};
  width: 202px;
`;
