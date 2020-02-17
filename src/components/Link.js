import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import s from '../styles/native/styles'

export default function AppLink({ to, title }) {
    const navigation = useNavigation();

    return (
        <Button
            title={title ? title : to}
            style={[s.text.default, s.text.link]}
            onPress={() => navigation.navigate(to)}
        />
    )
}
