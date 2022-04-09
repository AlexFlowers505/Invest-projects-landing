import React from 'react'
import { svgSpritePath } from '../../../../data/data'

const MiddleNavItem = ({name, icon, link}) => {
  return (
    <a className="middle-nav__item" href={`${link}`}>
        <svg className="middle-nav__icon"><use xlinkHref={`${svgSpritePath}${icon}`}/></svg>
        <p className="middle-nav__name">{name}</p>
    </a>
  )
}

export default MiddleNavItem