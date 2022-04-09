import React from 'react'
import { svgSpritePath } from '../../../../data/data'

const GridComponent = ({id, additionalClass, heading, points, pic, link}) => {
  return (
    <article className={`feature feature--${additionalClass}`} key={id}>
        <h4 className="feature__heading">{heading}</h4>
        <ul className="feature__points-list">
            {points.map((point, i) => {
                return (
                    <li key={i} className="feature__point">{point}</li>
                )
            })}
        </ul>
        <a href={link ? `${link}` : ""} className="feature__section-link">
            <svg>
                <use xlinkHref={`${svgSpritePath}#icon-arrow-right`}></use>
            </svg>
        </a>
        <svg className="feature__bg-pic"><use xlinkHref={`${svgSpritePath}${pic}`}/></svg>
    </article>
  )
}

export default GridComponent