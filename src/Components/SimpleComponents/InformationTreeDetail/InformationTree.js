import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ICLifeTime, ICFruit, ICFlower, ICPlantFamily} from '../../../Assets';
import {
  TextRegularSubTitlePrimary,
  TextRegularSubTitleTersierPrimary,
  TextRegularDescriptionBlack,
} from '../Text/Text';
import {colors} from '../../../Utils/Colors/colors';

export default function InformationTree({type, description}) {
  const Icon = type => {
    switch (type) {
      case 'LifeTime':
        return <ICLifeTime />;
      case 'Fruit':
        return <ICFruit />;
      case 'Flower':
        return <ICFlower />;
      case 'Family':
        return <ICPlantFamily />;
    }
  };

  const nameIcon = type => {
    switch (type) {
      case 'LifeTime':
        return <TextRegularSubTitlePrimary text={'Life Time'} />;
      case 'Fruit':
        return <TextRegularSubTitleTersierPrimary text={'Fruit'} />;
      case 'Flower':
        return <TextRegularSubTitleTersierPrimary text={'Flower'} />;
      case 'Family':
        return <TextRegularSubTitlePrimary text={'Family'} />;
    }
  };

  return (
    <View style={styles.containerInfo}>
      <View style={styles.containerIcon}>
        {Icon(type)}
        {nameIcon(type)}
      </View>
      <TextRegularDescriptionBlack text={description} />
    </View>
  );
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  containerInfo: {
    width: (width * 20) / 100,
    alignItems: 'center',
    marginBottom: 24,
  },
  containerIcon: {
    width: 70,
    height: 70,
    backgroundColor: colors.White,
    borderRadius: 12,
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
