import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export default function Account() {
    return (
        <SafeAreaView>
            <TextView>Ini account</TextView>
        </SafeAreaView>
    )
}
const TextView=styled.Text`
color:green;
`
