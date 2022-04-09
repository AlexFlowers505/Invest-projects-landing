import React from 'react'
import Heading from '../../global/Heading'
import MultilevelSlider from '../../global/multilevel-slider/MultilevelSlider'
import { holdingsNindustrialSitesSliderData } from '../../../data/data'

const HoldingsNindustrialSites = () => {
  return (
    <section>
        <Heading heading="Детализация по холдингам, индустриальным площадкам"
                 desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                 headingLinkID="holdings-n-industrial-sites-section" 
                 icon="#icon-factories"
        />
        <MultilevelSlider sliderData={holdingsNindustrialSitesSliderData }/>
    </section>
  )
}

export default HoldingsNindustrialSites