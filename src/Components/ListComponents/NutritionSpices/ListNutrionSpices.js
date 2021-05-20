import React from 'react';
import {FlatList} from 'react-native';
import ItemSpices from '../../SimpleComponents/ItemDetail/ItemSpices/ItemSpices';
import dummyNutrionSpices from './dummyNutrionSpices';

export default function (dataList) {
  return (
    <FlatList
      columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
      style={{marginTop: 24}}
      data={dummyNutrionSpices}
      renderItem={({item}) => (
        <ItemSpices value={item.value} name={item.name} />
      )}
      numColumns={4}
    />
  );
}
