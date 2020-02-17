import React from 'react'
import { Text, View } from 'react-native'

import Link from '../components/Link'

import s from '../styles/native/styles'
const [layout, text] = [s.layout, s.text]

export default function Home() {
    return (
        <View style={[layout.container]}>
            <Text style={[text.default, text.title]}>Open up App.js to start working on your app!</Text>
            <Link style={{color: 'red'}} to="Contact">
                <Text style={[text.default, text.link]}>Contact!</Text>
            </Link>
        </View>
    )
}
