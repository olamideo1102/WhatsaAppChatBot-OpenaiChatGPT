import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chrome Url Extention Saver',
    github: 'https://github.com',
    demo: 'https://chrome-url-saver-extention.pages.dev/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Inspirational Quote',
    github: 'https://github.com',
    demo: 'https://inspirational-quote.pages.dev/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    github: 'https://github.com',
    demo: 'https://weather-app-7sx.pages.dev/'
  },
  {
    id: 4,
    image: IMG4,
    title: (<p>{"My Master's Program Structure"}</p>),
    github: 'https://github.com',
    demo: 'https://my-master-s-program-structure.pages.dev/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'My Portfolio Website ',
    github: 'https://github.com',
    demo: 'https://olamideo.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tic Tac Toe',
    github: 'https://github.com',
    demo: 'https://tic-tac-toe-1d3.pages.dev/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio