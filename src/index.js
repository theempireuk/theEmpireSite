import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { useThree, Canvas } from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import { useSpring, useTransition, animated } from 'react-spring'
import { OrbitControls } from 'drei'
import ReactTypingEffect from 'react-typing-effect';

import './styles.css'
import './hamburger.css'
import Nav from './nav'
import Space from './space'
import { stages } from './stages'

const Scene = () => {
    const [active, setActive] = useState(false)
    const [activeInterval, setActiveInterval] = useState()

    useEffect(() => {
        if (!active) setActiveInterval(setTimeout(() => setActive(true), 19000))
        if (active) clearInterval(activeInterval)
    }, [active, setActive])

    const headlineTransitions = useTransition(!active, null, {
        from: { position: 'absolute', top: '80%', opacity: 0 },
        enter: { opacity: 1, top: '76%' },
        leave: { opacity: 0, top: '80%' }
    })

    const labelProps = useSpring({ opacity: active ? 1 : 0 })

    const landingSequence = () => window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    })

    return (
        <>
            <Nav />
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <Space active={active} setActive={setActive} landingSequence={landingSequence} />
            </Canvas>
            {headlineTransitions.map(
                ({ item, key, props }) =>
                item && (
                    <animated.div id="headline" key={key} style={props}>
                    <ReactTypingEffect 
                        text={["theEmpire.dev", "Your partner for domination...", "...of the World Wide Web."]} 
                        cursorRenderer={cursor => <h1 style={{ color: 'rgb(0, 184, 40)' }}>{cursor}</h1>}
                        displayTextRenderer={text => <h1>{text}</h1>}  
                        speed={80}
                        eraseSpeed={60}
                        eraseDelay={1500}
                        typingDelay={1200}
                    />
                    </animated.div>
                )
            )}
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

ReactDOM.render(<Scene />, document.getElementById('root'))
