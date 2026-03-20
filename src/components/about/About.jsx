import React from 'react'
import './about.css'
import myImage from '../../assets/ASME2.png'
import { GiGraduateCap } from 'react-icons/gi'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt="Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>Degree</h5>
                            <small>Information Technolog<br /><i>St.Paul University Quezon City.</i></small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld className='about__icon' />
                            <h5>Domains</h5>
                            <small>
                                <ul>
                                    <li>Hardware</li>
                                    <li>Infrastructure</li>
                                    <li>Web Development</li>
                                </ul>
                            </small>
                        </article>



                    </div>
                    <p>
                        I'm a <b>Information Technology Undergrad</b> at <b> St.Paul University Quezon City</b>.
                        I like troubleshooting hardware problems and assembly of desktop systems currently working on my web development skills, QA, and expanding my current experience 
                        with networking.

                    </p>

                </div>
            </div>
        </section>
    )
}

export default About