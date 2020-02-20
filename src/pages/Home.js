import React, { useState } from 'react'
import { View } from 'react-native'

import Space from '../components/Space'

import s from '../styles/native/styles'
const [layout] = [s.layout]

export default function Home() {
    const [section, setSection] = useState(0)

    return (
        <View style={[layout.fill]}>
            <Space section={section} setSection={setSection}/>
        </View>
    )
}