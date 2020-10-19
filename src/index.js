import ReactDOM from 'react-dom'
import React, { useMemo, useState } from 'react'
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
    const [actived, setActived] = useState(false)
    const [zoomTime, ] = useState(20000)
    let timer = useMemo(() => zoomTime, [zoomTime]) 

    const headlineText = [ "Welcome traveller...", "to theEmpire.dev.", "Your partner in domination...", "of the World Wide Web." ]
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
                <Space active={active} setActive={setActive} actived={actived} setActived={setActived} zoomTime={zoomTime} timer={timer} landingSequence={landingSequence} />
            </Canvas>
            <animated.div id="headline" style={headlineProps}>
                {!actived ? <ReactTypingEffect 
                    text={headlineText} 
                    cursorRenderer={cursor => <p className="headline-text">{cursor}</p>}
                    displayTextRenderer={text => <p id="headline-text" className="headline-text">{text}</p>}  
                    speed={40}
                    eraseSpeed={50}
                    eraseDelay={900}
                    typingDelay={900}
                /> : <p className="headline-text">theEmpire.dev</p>}
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
