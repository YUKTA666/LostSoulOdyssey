import React from 'react'
import "./Projects.css"
import LSO from "../../assets/lostSoulOdyssey.png"
import ALIWE from "../../assets/aliwe.jpeg"

export default function Projects(){
    return(
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container project_container">
                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={ALIWE} alt='aliwe'/>
                    </div>
                    <h3>ALiWe(All Is Well)</h3>
                    <div className="project_item-cta">
                        <a href="https://github.com/YUKTA666/AliWe" className="btn" target='_blank'>Github</a>
                        <a href="https://github.com/YUKTA666/AliWe" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={LSO} alt='lso'/>
                    </div>
                    <h3>Portfolio Website</h3>
                    <div className="project_item-cta">
                        <a href="https://github.com/YUKTA666/LostSoulOdyssey" className="btn" target='_blank'>Github</a>
                        <a href="https://yukta666.github.io/LostSoulOdyssey/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}