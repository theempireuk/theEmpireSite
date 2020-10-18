import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { Canvas } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, animated } from 'react-spring'
// Animated typing effect library for landing view text
import ReactTypingEffect from 'react-typing-effect';

import './styles.css'
import './hamburger.css'
import Nav from './nav'
import Space from './space'
import { stages } from './stages'

const Index = () => {
    const [active, setActive] = useState(false)
    const [activeInterval, setActiveInterval] = useState()
    const zoomTime = 15000

    useEffect(() => {
        if (!active && activeInterval) setActiveInterval(setTimeout(() => setActive(true), zoomTime+1000))
        if (active) clearInterval(activeInterval)
    }, [active, setActive, activeInterval])

    const labelProps = useSpring({ opacity: active ? 1 : 0 })
    const headlineProps = useSpring({ opacity: active ? 0 : 1 })

    const landingSequence = () => window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    })

    return (
        <>
            <Nav />
            <Canvas>
                <Space active={active} setActive={setActive} zoomTime={zoomTime} landingSequence={landingSequence} />
            </Canvas>
            <animated.div id="headline" style={headlineProps}>
                <ReactTypingEffect 
                    text={[ "Welcome traveller", "to theEmpire.dev.", "Your partner in domination", "of the World Wide Web." ]} 
                    cursorRenderer={cursor => <h1 style={{ color: 'rgb(0, 184, 40)' }}>{cursor}</h1>}
                    displayTextRenderer={text => <h1 style={{ color: 'rgb(0, 184, 40)' }}>{text}</h1>}  
                    speed={50}
                    eraseSpeed={25}
                    eraseDelay={1000}
                    typingDelay={1000}
                />
            </animated.div>
            <animated.div id="label" style={labelProps}>
                <h2>Planet LV2D3V</h2>
                <h4>Drag to explore.<br />Click to initiate landing sequence.</h4>
            </animated.div>
            {stages.map(stage => <section id={stage.title} key={stage.title}>
                <h1>{stage.title}</h1>
                <h2>{stage.tagline}</h2>
            </section>)}
        </>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
