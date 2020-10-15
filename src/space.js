import React, { useRef, useMemo } from 'react'
import * as THREE from 'three/src/Three'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { useFrame } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, animated } from 'react-spring/three'
import { Text } from 'drei'

function Planet({ active, setActive, stage, setStage }) {
    const planet = useRef()
    let theta = 0

    useFrame(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        const r = THREE.Math.degToRad((theta += 0.1))
        planet.current.rotation.set(planet.current.rotation._x, r, planet.current.rotation._z)
    })

    const { ...props } = useSpring({
        pos: active ? [0, 0, 2] : [0, 0, 0],
        scale: active ? [1.5, 1.5, 1.5] : [1.1, 1.1, 1.1],
        rotation: active ? [0, THREE.Math.degToRad(180), 0] : [0, 0, 0],
        config: { mass: 100, tension: 1000, friction: 1000, precision: 0.00001 }
    })

    return (
        <group ref={planet}>
        <animated.mesh
            onClick={() => setStage((stage) => stage++)}
            onPointerOver={(e) => setActive(true)}
            onPointerOut={(e) => setActive(false)}
            {...props}>
            <Text>theEmpire.dev</Text>
            <icosahedronGeometry attach="geometry" args={[1, 2]} />
            <meshStandardMaterial attach="material" color="red" wireframe />
        </animated.mesh>
        </group>
    )
}

function Stars({ stage }) {
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

const Space = ({ active, setActive, setStage }) => (
    <>
        <ambientLight color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <Planet active={active} setActive={setActive} setStage={setStage} />
        <Stars />
    </>
)

export default Space
