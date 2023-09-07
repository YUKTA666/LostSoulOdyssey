import React from 'react'
import "./Experience.css"
import {AiFillHtml5} from "react-icons/ai"
import {BiSolidFileCss} from "react-icons/bi"
import {TbBrandJavascript} from "react-icons/tb"
import {SiBootstrap} from "react-icons/si"
import {LiaReact} from "react-icons/lia"
import {IoLogoNodejs} from "react-icons/io"
import {SiAxios} from "react-icons/si"
import {LiaJava} from "react-icons/lia"
import {BiLogoSpringBoot} from "react-icons/bi"
import {TbBrandMysql} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {FaDocker} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {SiKubernetes} from "react-icons/si"
import {SiCsharp} from "react-icons/si"
import {SiDotnet} from "react-icons/si"

export default function Experience(){
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Developent</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillHtml5 className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BiSolidFileCss className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <TbBrandJavascript className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <LiaReact className="experience_details-icon"/>
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiBootstrap className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Developent</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <LiaJava className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiCsharp className="experience_details-icon"/>
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BiLogoSpringBoot className="experience_details-icon"/>
                            <div>
                                <h4>SpringBoot</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiDotnet className="experience_details-icon"/>
                            <div>
                                <h4>.NET</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <TbBrandMysql className="experience_details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Intermdeiate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiMongodb className="experience_details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <IoLogoNodejs className="experience_details-icon"/>
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiAxios className="experience_details-icon"/>
                            <div>
                                <h4>Axios</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_deployment">
                    <h3>Deployment and Version Control</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaGithub className="experience_details-icon"/>
                            <div>
                                <h4>Github</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaDocker className="experience_details-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiKubernetes className="experience_details-icon"/>
                            <div>
                                <h4>Kubernetes</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}