import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Khoa</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>

                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/buirogers/" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-instagram"></i></a>

                    <a href="https://www.facebook.com/khoa.bui.52" className="footer__social-link" target="_blank" rel="noreferrer"><i class="bx bxl-facebook"></i></a>

                    <a href="https://www.linkedin.com/in/khoa-bui-7b7370212/" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-linkedin"></i></a>

                    <a href="https://github.com/KhoaBui1993" className="footer__social-link" target="_blank" rel="noreferrer"> <i class="bx bxl-github"></i></a>
                </div>
                <span className="footer__copy">
                    &#169; Khoa Bui. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer