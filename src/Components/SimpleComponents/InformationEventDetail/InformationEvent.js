import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ICClock, ICPlace, ICPrice} from '../../../Assets';
import {TextRegularDescriptionBlack} from '../Text/Text';
import {colors} from '../../../Utils/Colors/colors';

export default function InformationEvent({type, description}) {
  const Icon = type => {
    switch (type) {
      case 'Time':
        return <ICClock />;
      case 'Place':
        return <ICPlace />;
      case 'Price':
        return <ICPrice />;
    }
  };

  const cekPrice = price => {
    let priceRupiah = '---';
    if (price === 0) {
      priceRupiah = 'FREE';
    } else if (price !== undefined) {
      priceRupiah = 'RP ' + price.toString();
    }
    return priceRupiah;
  };

  return (
    <View style={styles.containerInfo}>
      <View style={styles.containerIcon}>{Icon(type)}</View>
      <TextRegularDescriptionBlack
        text={type === 'Price' ? cekPrice(description) : description}
      />
    </View>
  );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  containerInfo: {
    width: (width * 30) / 100,
    alignItems: 'center',
    marginBottom: 32,
  },
  containerIcon: {
    width: 40,
    height: 40,
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
    marginBottom: 16,
  },
});
