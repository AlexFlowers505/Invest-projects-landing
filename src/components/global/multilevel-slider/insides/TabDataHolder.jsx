import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"
import { Pagination } from "swiper"
import { picsPath } from '../../../../data/data'
import { vidsPath } from "../../../../data/data";

const TabDataHolder = ({activeTab, activeInnerSlideIndex, setActiveInnerSlideIndex}) => {
    return (
        <div className="tab-data-holder__outer-wrapper">
            <Swiper
                className="tab-data-holder__swiper"
                slidesPerView={1}
                spaceBetween={80}
                centeredSlides={true}
                modules={[Pagination]}
                pagination={{clickable: true}}
                onSlideChange={(swiper) => {
                    setActiveInnerSlideIndex(swiper.activeIndex)
                }}
            >
                {activeTab.innerSlides.map((aSlide, i) => { 
                    const {heading, pic, vid} = aSlide
                    return (
                        <SwiperSlide key={i} className="tab-data-holder__slide-whole-thing">
                            <h5 className="tab-data-holder__slide-heading">{heading}</h5>
                            { vid ? <video className="tab-data-holder__slide-illustration" autoplay="" loop muted width="100%">
                                        <source src={`${vidsPath}${vid}`} type="video/mp4"/>
                                    </video>
                                  : <img className="tab-data-holder__slide-illustration" src={`${picsPath}${pic}`}/>
                            }
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="tab-data-holder__points-wrapper">
                {activeTab.innerSlides[activeInnerSlideIndex].desc.map((point, i) => {
                    return (
                        <p className="tab-data-holder__a-point" key={i}>{point}</p>
                    )
                })} 
            </div>
        </div>
    )
}

export default TabDataHolder