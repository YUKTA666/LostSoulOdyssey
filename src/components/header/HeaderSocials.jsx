import React from 'react'

import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGeeksforgeeks} from "react-icons/si"

export default function HeaderSocials(){
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/yukta-behare/" target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/YUKTA666'><FaGithub/></a>
            <a href='https://auth.geeksforgeeks.org/user/yuktabefmd2'><SiGeeksforgeeks/></a>
        </div>
    )
}