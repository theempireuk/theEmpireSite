import React from 'react'
import { Canvas } from 'react-three-fiber'

import Planet from './Planet'

import s from '../styles/native/styles'

export default function Space ({ section, setSection }) {
    return (
        <Canvas style={[s.layout.fill]}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Planet position={[-1.2, 0, 0]} />
        </Canvas>
    )
}
