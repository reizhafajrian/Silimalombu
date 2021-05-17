import React from 'react';
import {FlatList} from 'react-native';
import ItemNatural from '../../SimpleComponents/ItemDetail/ItemNatural/ItemUsability';
import dummyUsabilityNatural from './dummyUsabilityNatural';

export default function (dataList) {
  return (
    <FlatList
      style={{marginTop: 12, marginBottom: 12}}
      data={dummyUsabilityNatural}
      renderItem={({item}) => <ItemNatural description={item.description} />}
    />
  );
}
