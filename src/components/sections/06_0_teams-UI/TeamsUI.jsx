import React from 'react'
import Heading from '../../global/Heading'
import MultilevelSlider from '../../global/multilevel-slider/MultilevelSlider'
import { teamsUISliderData } from '../../../data/data'

const TeamsUI = () => {
  return (
    <section>
        <Heading heading="Интерфейс для работы в командах"
                 desc="Эффективные инструменты для работы в команде как из 5, так и из 1000 человек."
                 headingLinkID="teams-UI-section" 
                 icon="#icon-modules"
        />
        <MultilevelSlider sliderData={teamsUISliderData}/>
    </section>
  )
}

export default TeamsUI