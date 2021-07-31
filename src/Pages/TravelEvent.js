import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import CardEventMemo from '../Components/SimpleComponents/CardEvent/CardEvent';
import TextInputComponent from '../Components/SimpleComponents/TextInput/TextInput';
import {Get} from '../Utils/Api/Api';

export default function TravelEvent() {
  const [data, setData] = useState([]);

  let ref = useRef(true).current;
  const api = async () => {
    if (ref === true) {
      try {
        const {result} = await Get(
          `/data/query/production?query=*[_type%20==%20%27event%27]`,
        );
        console.log(result);
        if (result !== null) {
          setData(result);
        }
      } catch (error) {
        throw error;
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      ref = true;
      api();
      return () => {
        ref = false;
        setData([]);
      };
    }, []),
  );

  return (
    <View style={{flex: 1, padding: 30}}>
      <TextInputComponent />
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={({item}) => <CardEventMemo item={item} />}
          keyExtractor={item => item._id}
          key={item => item._id}
        />
      )}
    </View>
  );
}
