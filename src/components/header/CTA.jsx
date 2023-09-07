import React from 'react'
import CV from "../../assets/cv.pdf"

export default function CTA(){
    return(
        <div className="cta">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={CV} download className='btn'>Download CV</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    )
}