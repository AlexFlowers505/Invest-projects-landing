import React, { useState } from 'react'

// icons
import { BsChevronCompactRight } from 'react-icons/bs'

const OuterItem = ({i, outerItemName, innerLinks}) => {
    const [ isUnfolded, setIsUnfolded ] = useState()
    const handleBtnClick = () => {
        isUnfolded ? setIsUnfolded(false) : setIsUnfolded(true)
    }
  return (
    <div className={`landing-nav__item-wrapper${ isUnfolded ? " landing-nav__item-wrapper--unfolded" : ""}`}>
        <button type="button" 
                className="landing-nav__item-outer-btn"
                onClick={()=> handleBtnClick()}
        >{outerItemName}
            <BsChevronCompactRight className="landing-nav__item-toggle-icon"/>
        </button>
        { innerLinks && (
            <ul className="landing-nav__inner-items-wrapper">
                {innerLinks.map((item, i) => {
                    const {name, url} = item
                    return (
                        <a target="_blank" rel="noopener noreferrer" key={i} href={url} className="landing-nav__inner-item-link">{name}</a>
                    )
                })}
            </ul>
        )}
    </div>
  )
}

export default OuterItem