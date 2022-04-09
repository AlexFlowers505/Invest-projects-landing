import React from "react"
import { ReactDOM } from "react"

import { svgSpritePath } from "../../../data/data"

const Hero = () => {
    return (
        <section id="welcome-screen-section" className="welcome-screen__wrapper">
            <svg className="welcome-screen__bg-illustration"><use xlinkHref={`${svgSpritePath}#illustration-background-abstract-lines`}></use></svg>
            <div className="welcome-screen__heading-wrapper">
                <svg className="welcome-screen__logo fade-in-bottom"><use xlinkHref={`${svgSpritePath}#logo-invPro--logotype`}></use></svg>
                <p className="welcome-screen__desc fade-in-fwd">Цифровая платформа инвестиционных проектов России и стран ЕАЭС</p>
            </div>
            <a className="welcome-screen__begin-btn puff-in-center" href="#about-us-section">
                <svg className="pulsate-fwd"><use xlinkHref={`${svgSpritePath}#icon-arrow-down`}></use></svg>
            </a>
            <span className="welcome-screen__bottom-line"></span>
        </section>
    )
}

export default Hero 