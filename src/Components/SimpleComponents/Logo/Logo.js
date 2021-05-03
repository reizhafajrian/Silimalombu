import React from 'react'
import { View, Text,Image } from 'react-native'
import styled from 'styled-components'
import { IMGLogo } from '../../../Assets'

export default function Logo() {
    return (
        <>
           <Image source={IMGLogo}  />
        </>
    )
}

