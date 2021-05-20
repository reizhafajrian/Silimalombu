import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components';

export default function TextInputComponent() {
  return <TextInput placeholder={'Search'} style={{height:40,backgroundColor:"white",borderRadius:8,width:"100%",alignSelf:"center",padding:12}} />;
}
// const TextInput=styled.TextInput`
// `
