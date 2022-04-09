import React from 'react'

import RegisterBtn from '../../RegisterBtn'
const SliderLinks = ({linksInfo}) => {
    return (
        <>
            {linksInfo && (
                <div className="slider-links__wrapper">
                    {linksInfo.resourseLink && <a href={linksInfo.resourseLink.address} className="slider-links__link slider-links__link--resourse" target="_blank" rel="noopener noreferrer">{linksInfo.resourseLink.linkName}</a>}
                    {linksInfo.registerLink && <RegisterBtn/>}
                </div>
            )}
        </>
    )
}

export default SliderLinks