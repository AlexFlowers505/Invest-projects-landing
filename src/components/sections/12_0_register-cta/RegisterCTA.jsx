import React from 'react'
import RegisterBtn from '../../global/RegisterBtn'
import { svgSpritePath } from '../../../data/data'

const RegisterCTA = () => {
  return (
    <section className="register-CTA landing-section">
      <svg className="register-CTA__icon"><use xlinkHref={`${svgSpritePath}#icon-lightning`}/></svg>
      <p className="cta-desc">Начните пользоваться всеми возможностями платформы уже сегодня!</p>
      <div className="services-icons__wrapper">
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-location`}></use>
        </svg>
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-info`}></use>
        </svg>
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-modules`}></use>
        </svg>
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-community`}></use>
        </svg>
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-factories`}></use>
        </svg>
        <svg className="services-icons__item">
          <use xlinkHref={`${svgSpritePath}#icon-growth`}></use>
        </svg>
      </div>
      <RegisterBtn className="slider-links__link slider-links__link--register" isIconed={false} text="Регистрация"/>
    </section>
  )
}

export default RegisterCTA