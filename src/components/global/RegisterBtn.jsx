import React from 'react'
import { svgSpritePath } from '../../data/data'

const RegisterBtn = ({isIconed = true, text='Попробовать бесплатно'}) => {
  return (
    <a href='https://investprojects.info/register' className="slider-links__link slider-links__link--register" target="_blank" rel="noopener noreferrer">{text}
        {isIconed && <svg><use xlinkHref={`${svgSpritePath}#icon-arrow-right`}/></svg>}
    </a>
  )
}

export default RegisterBtn