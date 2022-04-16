import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Concepts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototypes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strategic Planning</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>System Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud Managed Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tracking & Analytics</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User experience analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Functioning wireframe</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full set of mockups</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consistent visual language</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI guide</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Usability Testing</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services