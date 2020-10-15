import ReactDOM from 'react-dom'
import React, { useState, useEffect, useMemo } from 'react'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { Canvas } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, useTransition, animated } from 'react-spring'
import './styles.css'

import Space from './space'

const Scene = () => {
    const [active, setActive] = useState(false)
    const [stage, setStage] = useState(0)

    const headlineTransitions = useTransition(!active, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    const labelProps = useSpring({ opacity: active ? 1 : 0 })

    useEffect(() => {
        console.log(stage)
    }, [stage])

    return (
        <>
        <Canvas>
            <Space active={active} setActive={setActive} stage={stage} setStage={setStage} />
        </Canvas>
        {headlineTransitions.map(
            ({ item, key, props }) =>
            item && (
                <animated.div id="headline" key={key} style={props}>
                <h1>theEmpire.dev</h1>
                </animated.div>
            )
        )}
        <animated.div id="label" style={labelProps}>
            <h2>Planet LV2D3V</h2>
            <h4>(click to begin)</h4>
        </animated.div>
        </>
    )
}

ReactDOM.render(<Scene />, document.getElementById('root'))
