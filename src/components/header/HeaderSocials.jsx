import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
    return (

        <div className="header__socials">

            <a href="https://linkedin.com/in/angelo-sardea" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/AngeloWasTaken" target="_blank" rel='noreferrer'><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials