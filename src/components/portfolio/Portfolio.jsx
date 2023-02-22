import React from 'react'
import './Portfilio.css'
import Projects from './Projects'
const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Project</span>
        <Projects />
    </section>
  )
}

export default Portfolio