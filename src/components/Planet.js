import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function Planet () {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
    return (
        <mesh ref={mesh}>
            <icosahedronBufferGeometry attach="geometry" args={[2, 2]} />
            <meshStandardMaterial attach="material" color={'hotpink'} />
        </mesh>
    )
}
