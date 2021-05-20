import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMGBGLogo} from '../../../Assets';

export default function CardEvent() {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        position: 'relative',

        marginTop: 30,
      }}>
      <Image
        source={IMGBGLogo}
        style={{width: 120, height: 120, resizeMode: 'cover'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'relative',
          padding: 10,
          flex: 1,
        }}>
        <Text style={{fontWeight: '700', fontSize: 14}}>Mango Festival</Text>
        <Text style={{fontWeight: '500', fontSize: 12, marginTop: 8}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
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
            marginHorizontal:0,
            width: '100%',
          }}>
          <Text style={{color:"#7A7A7A"}}>Rp 500.000</Text>
          <TouchableOpacity>
            <Text style={{color: '#1A790E'}}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
