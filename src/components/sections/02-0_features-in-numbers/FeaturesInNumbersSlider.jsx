import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// import required modules
import { Pagination, Autoplay } from "swiper"

import NumbersFeatureSlide from "./insides/NumbersFeatureSlide"
import Heading from "../../global/Heading";
import {featuresInNumbersData} from "../../../data/data"

const FeaturesInNumbersSlider = () => {
  return (
    <section className="first-look-slider landing-section">
      <Heading heading="Мы – это:" headingLinkID="about-us-section"/>
      <Swiper 
        loop={true}
        slidesPerView={"auto"}
        speed={400}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="first-look-slider"
        breakpoints={{
          300: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 50,
          },
          890: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 30
          },
          1500: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30
          }
        }}
      >
        {featuresInNumbersData.map((item) => {
          const {id, heading, additionalClass, points, pic} = item;
          return (
            <SwiperSlide key={id}
              style={{width: '85vw', height: '230px'}}>
              <NumbersFeatureSlide
                                   heading={heading}
                                   additionalClass={additionalClass}
                                   points={points}
                                   pic={pic}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default FeaturesInNumbersSlider;