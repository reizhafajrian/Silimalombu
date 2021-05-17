import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {IMGLogo} from '../../../Assets';

export default function Logo() {
  return (
    <>
      <Image style={styles.logo} source={IMGLogo} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 69,
  },
});
