import React from 'react'
import Heading from '../../global/Heading'
import MultilevelSlider from '../../global/multilevel-slider/MultilevelSlider'
import { mapsSliderData } from '../../../data/data'

const Maps = () => {
  return (
    <section>
        <Heading heading="Карты"
                 desc="Изучайте проекты, компании, инд.парки прямо на карте."
                 headingLinkID="maps-section" 
                 icon="#icon-location"
        />
        <MultilevelSlider sliderData={mapsSliderData}/>
    </section>
  )
}

export default Maps