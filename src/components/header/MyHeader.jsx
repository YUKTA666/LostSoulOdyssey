import React from 'react'

import "./MyHeader.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/yukta-tl.png"

export default function MyHeader(){
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Yukta Lalitkumar Behare</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt='me'/>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}