import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextLightDescriptionBlack} from '../../Text/Text';
import {colors} from '../../../../Utils/Colors/colors';

export default function InformationTree({description}) {
  return (
    <View style={styles.containerInfo}>
      <TextLightDescriptionBlack text={description} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    width: '99%',
    backgroundColor: colors.White,
    marginBottom: 12,
    marginHorizontal: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
