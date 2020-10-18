import React, { useRef, useState, useEffect, useMemo } from 'react'
import * as THREE from 'three/src/Three'
import { useFrame } from 'react-three-fiber'
import { useSpring, animated } from 'react-spring/three'
import { OrbitControls } from 'drei'

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
        const starCount = 250
        const geo = new THREE.SphereBufferGeometry(1, 10, 10)
        const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('white') })
        const coords = new Array(starCount).fill().map((i) => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
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

const Space = ({ active, setActive, zoomTime, landingSequence }) => {
    let [zoomed, setZoomed] = useState(false)
    let initialPos = useMemo(() => ({ x: 0, y: -1000, z: -1000 }))
    let endPos = useMemo(() => ({ x: 0, y: 0, z: 5 }))
    let timer = useMemo(() => zoomTime)
    let percentZoomed = useMemo(() => 0)

    useFrame(({ camera }, delta) => {
        if (!zoomed) {
            timer -= delta * 1000
            if (timer <= 0) {
                camera.position.set(endPos.x, endPos.y, endPos.z)
                setZoomed(true)
            } else {
                percentZoomed = 1 - timer/zoomTime
                camera.position.set(
                    endPos.x - initialPos.x * (percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1),
                    endPos.y - initialPos.y * (percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1),
                    endPos.z - initialPos.z * (percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1)*(percentZoomed-1)
                )
            }
        }
    })
    
    return <>
        <OrbitControls enableZoom={false}/>
        <ambientLight color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <Planet active={active} setActive={setActive} landingSequence={landingSequence} />
        <Stars />
    </>
}

export default Space
