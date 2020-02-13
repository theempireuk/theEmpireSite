import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Link({ to }) {
    const navigation = useNavigation();

    return (
        <Button
            title={to}
            onPress={() => navigation.navigate(to)}
        />
    )
}

export { Link }
