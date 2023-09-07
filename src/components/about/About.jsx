import React from 'react'
import "./About.css"
import ME from "../../assets/about.png"
import {FaGraduationCap} from "react-icons/fa"
import {HiTranslate} from "react-icons/hi"
import {FaRobot} from "react-icons/fa"

export default function About(){
    return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About image"/>
            </div>
          </div>

          <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <FaGraduationCap className='about_icon'/>
                  <h5>Education</h5>
                  <h6>PG-DAC(Acts Pune)</h6> 
                  <h6>BTech(SGGSIE&T, Nanded)</h6>
                </article>

                <article className="about_card">
                  <FaRobot className='about_icon'/>
                  <h5>Extracurricular</h5>
                  <h6>Mechatronics Lead(Rmageddon 2019)</h6> 
                  <h6>E-Yantra(IIT Bombay)</h6>
                  <h6>Roboccon(2019, 2021)</h6>
                </article>

                <article className="about_card">
                  <HiTranslate className='about_icon'/>
                  <h5>Foreign Languages</h5>
                  <h6>French</h6> 
                </article>
              </div>

              <p>
              Highly motivated and enthusiastic fresher software developer proficient in various programming languages as well as software development technologies (Spring Boot, ReactJS, MongoDB, MySQL) and eager to learn new technologies.
              </p>

              <a href="#contact" className="btn btn-primary">Let's Connect</a>
          </div>
        </div>
      </section>
    )
}
