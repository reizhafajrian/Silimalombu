import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import MainStack from '../MainStack/MainStack'

export default function Provider() {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}
