import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDribbble, faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';
export default function Footer() {
    return (
        <div className="main-footer">
            <div className="main-footer__top">
                <div className="main-footer__top__content">
                    <span className="main-footer__top__content__headline">
                        Interested in talking?
                    </span>
                    <p><span className="available-circle unavailable"></span> I am currently unavailable for work</p>
                    <a className="btn btn-primary" href="mailto:ben@benstephan.com">Send me a message</a>
                </div>
                <div className="main-footer__top__links">
                    <span className="main-footer__top__links__info">
                        215 350 2309<br />
                        ben@benstephan.com
                    </span>
                    <span className="main-footer__top__links__social">
                        <a href="https://www.linkedin.com/in/ben-stephan-a44b3a10/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://dribbble.com/benstephan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /></a>
                        <a href="https://codepen.io/benstephan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
                        <a href="https://github.com/benstephan" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    </span>
                </div>
            </div>
            <div className="main-footer__creds">
                <span className="main-footer__creds__text">
                    &copy; Ben Stephan Design
                </span>
            </div>
        </div>
    )
}
