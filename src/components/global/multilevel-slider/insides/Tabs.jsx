import React, { useRef, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"
import { Scrollbar, FreeMode } from "swiper"

const Tabs = ({tabs, setActiveTab, activeTab, setActiveInnerSlideIndex}) => {
  const tabChangeHandler = (IndexOfaTab) => {
    setActiveTab(tabs[IndexOfaTab])
    setActiveInnerSlideIndex(0)
  }
  return (
    <div className="tabs__list">
    { tabs && (
            <Swiper
              className="multilevel-slider__swiper"
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
              {tabs.map((tab, i) => { 
                const {heading, tabID} = tab
                return (
                  <SwiperSlide key={i} className="tab-slide">
                    <button className={`tab-btn ${tabID === activeTab.tabID ? "tab-btn--active" : false}`} 
                            type="button"
                            onClick={()=>tabChangeHandler(i)}
                    >{heading}</button>
                  </SwiperSlide>
                )
              })}
          </Swiper>
    )}
  </div> 
  )
}

export default Tabs
