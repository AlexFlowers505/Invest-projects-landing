import React from 'react'
import Heading from '../../global/Heading'
import PartnerItem from './insides/PartnerItem'
import { partnersData } from '../../../data/data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Autoplay, FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/free-mode"


const PartnersListing = () => {
    return (
        <section className="partners__section landing-section">
            <Heading heading="Наши партнеры" 
                     headingLinkID="partners-section" 
                     icon="#icon-people"
                     desc="Присоединяйтесь к сотням успешных компаний."
            />
            <Swiper
                modules={[ Grid, Autoplay, FreeMode ]}
                slidesPerView={3}
                grid={{fill: 'row', rows: 3}}
                spaceBetween={0}
                centeredSlides={false}
                speed={4500}
                autoplay={{delay: .001, disableOnInteraction: false}}
                freeMode={true}
                loop={false}
            >
                {partnersData.map((item, i) => {
                    const {svgID, name, desc} = item
                    return (
                        <SwiperSlide className="partner-item__slide" key={i}>
                            <PartnerItem svgID={svgID} name={name} desc={desc}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>










    )
}

export default PartnersListing