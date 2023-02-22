import React from 'react'
import './Skills.css'
import Tools from './Tools'
import ProgrammingLanguage from './ProgrammingLanguage'

const Skill = () => {
  return (
    <section className="skills section" id='skills'>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <ProgrammingLanguage />
        <Tools />
      </div>
    </section>
  )
}

export default Skill