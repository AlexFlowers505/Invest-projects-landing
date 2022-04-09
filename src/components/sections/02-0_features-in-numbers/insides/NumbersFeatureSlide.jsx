import React from 'react'

import { svgSpritePath } from '../../../../data/data'

const NumbersFeatureSlide = ({id, heading, additionalClass, points, pic}) => {
  return (
    <article className={`slide slide--${additionalClass}`} key={id}>
      {heading && <h3 className="slide__heading">{heading}</h3>}
      {points.length && (
        <ul className="slide__features-list">
          {points.map((point) => {
            const {desc, numbers, pointID} = point
            return (
              <li key={pointID} className="slide__features-item features-item">
                <p className="features-item__numbers">{numbers}</p>
                <p className="features-item__desc">{desc}</p>
              </li>
            )
          })}
        </ul>
      )}
      <svg className="slide__pic">
        <use xlinkHref={`${svgSpritePath}${pic}`}/>
      </svg>
    </article>
  )
}

export default NumbersFeatureSlide