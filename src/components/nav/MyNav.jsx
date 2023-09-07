import React from 'react'
import "./MyNav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineProject} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsPostcardHeart} from "react-icons/bs"
import {LuContact} from "react-icons/lu"
import { useState } from 'react'

export default function MyNav(){
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active':''}><AiOutlineProject/></a>
            <a href="#creative" onClick={() => setActiveNav('#creative')} className={activeNav === '#creative' ? 'active':''}><BsPostcardHeart/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><LuContact/></a>
        </nav>
    )
}