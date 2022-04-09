import React from 'react'
import Heading from '../../global/Heading'
import MultilevelSlider from '../../global/multilevel-slider/MultilevelSlider'
import { projectBaseSliderData } from '../../../data/data'

const ProjectBase = () => {
  return (
    <section>
        <Heading heading="Инвестиционные проекты России и стран ЕАЭС"
                 desc="Подробнейшая информация по проектам."
                 headingLinkID="project-base-section" 
                 icon="#icon-info"
        />
        <MultilevelSlider sliderData={projectBaseSliderData}/>
    </section>
  )
}

export default ProjectBase