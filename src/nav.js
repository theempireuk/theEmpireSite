import React, { useState } from 'react'
import { stages } from './stages'

const Nav = () => { 
    const [isActive, setActive] = useState(false)

    const handlePress = () => {
        console.log("clicked")
        setActive(!isActive)
    }

    return <div id="nav">
        <div style={{ display: "flex" }}>
            <p>Navigations Status: 100%<br />Warp Drive: Online</p>
            <button className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : null}`} onClick={handlePress}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
        {isActive && <ul id="nav-menu">
            <li><p>Information Hubs:</p></li>
            {stages.map(stage => <li key={stage.title}>
            <a href={`#${stage.title}`}>
                <h4>{stage.title}</h4>
            </a>
            </li>)}
        </ul>}
    </div>
}

export default Nav