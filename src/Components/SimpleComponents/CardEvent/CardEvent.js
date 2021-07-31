import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMGBGLogo} from '../../../Assets';

export default function CardEvent({item}) {
  const changeImage = item.eventImage.asset._ref.slice(6, -4) + '.jpg';
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        marginTop: 30,
      }}>
      <Image
        source={{
          uri: `https://cdn.sanity.io/images/fxmgr8dq/production/${changeImage}`,
        }}
        style={{width: 120, height: 120, resizeMode: 'cover'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'relative',
          padding: 10,
          flex: 1,
        }}>
        <Text style={{fontWeight: '700', fontSize: 14}}> {item.title}</Text>
        <Text style={{fontWeight: '500', fontSize: 12, marginTop: 8}}>
          {typeof item.about !== 'undefined'
            ? item.about[0].children[0].text
            : ''}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            bottom: 0,
            position: 'absolute',
            left: 10,
            right: 0,
            marginHorizontal: 0,
            width: '100%',
          }}>
          <Text style={{color: '#7A7A7A'}}>{item.price}</Text>
          <TouchableOpacity>
            <Text style={{color: '#1A790E'}}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export const CardEventMemo = React.memo(
  CardEvent,
  function (prevProps, nextProps) {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  },
);
