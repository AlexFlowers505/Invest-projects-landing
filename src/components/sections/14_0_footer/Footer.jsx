import React from 'react'
import { svgSpritePath } from '../../../data/data'

const Footer = () => {
    const handleContactsEmphasis = () => {}

  return (
    <footer className="landing-footer landing-section">
        <svg className="landing-footer__logo"><use xlinkHref={`${svgSpritePath}#logo-invPro--logotype`}></use></svg>
        <div className="socials__wrapper">
            <a className="socials__item" href="tg://resolve?domain=Investprojects_help">
                <svg>
                    <use xlinkHref={`${svgSpritePath}#icon-telegram`}></use>
                </svg>
            </a>
            <a className="socials__item" href="https://api.whatsapp.com/send?phone=79650499284">
                <svg>
                    <use xlinkHref={`${svgSpritePath}#icon-whatsapp`}></use>
                </svg>
            </a>
            <a className="socials__item" href="tel:8 (812) 363-48-99">
                <svg>
                    <use xlinkHref={`${svgSpritePath}#icon-phone`}></use>
                </svg>
            </a>
            <a className="socials__item" href="mailto:info@investprojects.info">
                <svg>
                    <use xlinkHref={`${svgSpritePath}#icon-email-2`}></use>
                </svg>
            </a>
        </div>
        <address className="landing-footer__address">191119, Россия, г. Санкт-Петербург, ул. Марата, д. 82</address>
        <p className="landing-footer__copyright">© 2006 - 2022 | Проект Инвестиционной группы "Профессиональные Комплексные Решения" (ПКР)</p>
        <svg className="landing-footer__decor-logo">
                <use xlinkHref={`${svgSpritePath}#logo-invPro--logo`}></use>
        </svg>
    </footer>
  )
}

export default Footer