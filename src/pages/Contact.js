import React from 'react'
import { View, Text } from 'react-native'

import Link from '../components/Link'

import s from '../styles/native/styles'
const [layout, text] = [s.layout, s.text]


export default function Contact() {
    return (
        <View style={[layout.container, layout.fill]}>
            <Text style={[text.default, text.title]}>Contact</Text>
            <Link to="Home">
                <Text style={[text.default, text.link]}>Return from whence you came!</Text>
            </Link>
        </View>
    )
}
