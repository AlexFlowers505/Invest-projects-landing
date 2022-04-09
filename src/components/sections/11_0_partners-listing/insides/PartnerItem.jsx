import React from 'react'

const partnerItem = ({svgID, name, desc}) => {
    return (
        <div className="partner-item__wrapper">
            <svg className="partner-item__logo"><use xlinkHref={`#${svgID}`}/></svg>
            {/* <p className="partner-item__name">{name}</p>
            <p className="partner-item__desc">{desc}</p> */}
        </div>
  )
}

export default partnerItem