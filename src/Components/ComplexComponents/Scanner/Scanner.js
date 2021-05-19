import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import TextTitle from '../../SimpleComponents/TextTitile/TextTitle'
import { RNCamera } from 'react-native-camera';
export default function Scanner() {
    return (
        <QRCodeScanner
        onRead={()=>alert("berhasil")}
        topContent={
            <View>
                <TextTitle text="Silimalombu"/>
            </View>
          }
          bottomContent={
            <TouchableOpacity>
              <Text>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
    )
}
