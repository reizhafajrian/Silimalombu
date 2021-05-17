import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
import {IMGBGLogo} from '../../../Assets';
import {TextBoldDesriptionWhite, TextLightDesriptionWhite} from '../Text/Text';

export default function ItemEvent({imgSource, title, price}) {
  const image = imgSource => {
    let imageValue;
    if (imgSource === undefined || imgSource === '') {
      imageValue = IMGBGLogo;
    } else {
      imageValue = imgSource;
    }
    return imageValue;
  };

  const cekPrice = price => {
    let priceRupiah;
    if (price === 0) {
      priceRupiah = 'FREE';
    } else if (price !== undefined) {
      priceRupiah = 'RP ' + price.toString();
    }
    return priceRupiah;
  };

  return (
    <View style={styles.containerEvent}>
      <Image style={styles.eventImage} source={image(imgSource)} />
      <View style={styles.containerText}>
        <TextBoldDesriptionWhite text={title} />
        <TextLightDesriptionWhite text={cekPrice(price)} />
      </View>
    </View>
  );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  containerEvent: {
    width: (width * 45) / 100,
    height: (width * 45) / 100,
    borderRadius: 8,
    marginTop: 22,
  },
  eventImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 8,
  },
  containerText: {
    marginBottom: 10,
    marginLeft: 10,
    bottom: 0,
    position: 'absolute',
  },
});
