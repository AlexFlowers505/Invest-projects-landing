import React from 'react'
import Heading from '../../global/Heading'
import MultilevelSlider from '../../global/multilevel-slider/MultilevelSlider'
import { analyticsSliderData } from '../../../data/data'

const Analytics = () => {
  return (
    <section>
        <Heading heading="Аналитика"
                 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                 headingLinkID="analytics-section" 
                 icon="#icon-growth"
        />
        <MultilevelSlider sliderData={ analyticsSliderData }/>
    </section>
  )
}

export default Analytics