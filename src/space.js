import React, { useRef, useState, useEffect, useMemo } from 'react'
import * as THREE from 'three/src/Three'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { useFrame } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, animated } from 'react-spring/three'

function Planet({ active, setActive, landingSequence }) {
    const planet = useRef()
    const satellite = useRef()
    const [rotationSpeed, setRotationSpeed] = useState(0.2)   
    const [theta, setTheta] = useState(0)
    useEffect(() => active ? setRotationSpeed(0.4) : setRotationSpeed(0.2), [active, setRotationSpeed])

    useFrame(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        setTheta(theta => theta + THREE.Math.degToRad(rotationSpeed))
        planet.current.rotation.set(planet.current.rotation._x, theta, planet.current.rotation._z)
        satellite.current.position.set(2 * Math.sin(theta*2), 2 * Math.cos(theta*2), 0)
        satellite.current.rotation.set(0, 0, -theta*2)
    })

    const { ...planetProps } = useSpring({
        pos: planet.current ? active ? [
            planet.current.position._x,
            planet.current.position._y, 
            planet.current.position._z + 2
        ] : [
            planet.current.position._x, 
            planet.current.position._y, 
            planet.current.position._z
        ] : [0, 0, 0],
        scale: active ? [1.5, 1.5, 1.5] : [1.1, 1.1, 1.1],
        config: { mass: 100, tension: 1000, friction: 1000, precision: 0.00001 }
    })

    return (
        <group ref={planet}>
        <animated.mesh
            onClick={landingSequence}
            onPointerOver={(e) => setActive(true)}
            onPointerOut={(e) => setActive(false)}
            {...planetProps}>
            <mesh ref={satellite}>
                <icosahedronGeometry attach="geometry" args={[0.1, 2]} />
                <meshStandardMaterial attach="material" color="blue" wireframe />
            </mesh>
            <icosahedronGeometry attach="geometry" args={[0.8, 2]} />
            <meshStandardMaterial attach="material" color="red" wireframe />
        </animated.mesh>
        </group>
    )
}

function Stars() {
    const [geo, mat, vertices, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 10, 10)
        const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('white') })
        const coords = new Array(500).fill().map((i) => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
        return [geo, mat, vertices, coords]
    }, [])

    return (
        <group>
        {coords.map(([p1, p2, p3], i) => (
            <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
        </group>
    )
}

const Space = ({ active, setActive, landingSequence }) => (
    <>
        <ambientLight color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <Planet active={active} setActive={setActive} landingSequence={landingSequence} />
        <Stars />
    </>
)

export default Space
