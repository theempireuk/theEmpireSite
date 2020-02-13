import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Link } from '../components/Router'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Link to="Contact">Contact!</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});