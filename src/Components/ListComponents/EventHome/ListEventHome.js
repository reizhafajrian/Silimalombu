import React from 'react';
import {FlatList} from 'react-native';
import ItemEvent from '../../SimpleComponents/EventHome/ItemEvent';
import dummyEvent from './dummyEvent';

export default function () {
  return (
    <FlatList
    columnWrapperStyle={{  flex: 1,justifyContent: 'space-between'}}
      data={dummyEvent}
      renderItem={({item}) => (
        <ItemEvent
          title={item.title}
          price={item.price}
          imgSource={item.imgSource}
        />
      )}
      numColumns={2}
    />
  );
}
