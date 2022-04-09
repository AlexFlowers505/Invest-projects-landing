import React from 'react'

import { svgSpritePath } from '../../data/data'

const Heading = ({icon, heading, desc, headingLinkID}) => {
  return (
    <div className="landing-section__heading-wrapper" id={headingLinkID}>
        {icon && (
            <svg className="landing-section__icon">
                <use xlinkHref={`${svgSpritePath}${icon}`}></use>
            </svg>
        )}
        <h2 className="landing-section__heading">{heading}</h2>
        {desc && <p className="landing-section__desc">{desc}</p>}
    </div>
  )
}

export default Heading