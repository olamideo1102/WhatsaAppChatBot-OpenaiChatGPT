import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h1>Hi, I'm Olamide </h1>
        <h3 className="text-light">A SOFTWARE ENGINEER</h3>
        <CTA />
        <HeaderSocial />
        

        <div className="me">
          
          
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
