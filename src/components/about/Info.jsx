import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Entry Level</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">Computer Science</span>
        </div>
        <div className="about__box">
        <i class='bx bx-folder-minus about__icon' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">4+</span>
        </div>
    </div>
  )
}

export default Info