import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/lge.png'
/* import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png' ... to add other projects later */

const Myprojects = () => {
    return (
        <section id='myprojects'>

            <h5>My Recent Works</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Logic's Edge</h3>
                    <small className='text-light'>GML / Gamemaker Studio | Firebase</small>
                    <div className="portfolio__item-cta">
                        
                    </div>

                </article>
            </div>
        </section>
    )
}

export default Myprojects