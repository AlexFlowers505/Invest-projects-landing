import React from 'react'
import MiddleNavItem from './insides/MiddleNavItem'

import { sectionsNavData } from '../../../data/data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"
import { Scrollbar, FreeMode } from "swiper"

const MiddleNav = () => {
return (
    <section className="middle-nav__section landing-section">
        <Swiper
            className="middle-nav__swiper"
            slidesPerView={'auto'}
            centeredSlides={false}
            modules={[Scrollbar, FreeMode]}
            scrollbar={{
            hide: true
            }}
            freeMode={{
            enabled: true,
            sticky: false,
            }}
        >
            {sectionsNavData.map((navItem, i) => { 
                const {name, icon, link} = navItem
                return (
                    <SwiperSlide key={i} className="middle-nav__slide">
                        <MiddleNavItem name={name} link={link} icon={icon}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default MiddleNav
