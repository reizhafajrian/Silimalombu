import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TextBoldTitlePrimary, TextLightDescriptionBlack} from '../../Text/Text';
import {colors} from '../../../../Utils/Colors/colors';

export default function ItemSpices({value, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <TextBoldTitlePrimary text={value.toString() + ' g'} />
        <TextLightDescriptionBlack text={name} />
      </View>
    </View>
  );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    width: (width * 20) / 100,
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 2,
  },
  containerInfo: {
    width: 70,
    height: 70,
    backgroundColor: colors.White,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 14,
    paddingHorizontal: 4,
    paddingBottom: 4,
  },
});
