import React from 'react'

import Heading from '../../global/Heading'
import GridComponent from './insides/GridComponent'
import { instrumentsFeaturesData } from '../../../data/data'

const InstrumentsFeatures = () => {
  return (
    <section className="instruments-features-section">
      <Heading heading={`Что у нас есть\n&\nЧто мы умеем`}/>
      <div className="features-grid">
        {instrumentsFeaturesData.map((feature) => {
          const {id, additionalClass, heading, points, pic, link} = feature
          return (
            <GridComponent key={id}
                           additionalClass={additionalClass}
                           heading={heading}
                           points={points}
                           pic={pic}
                           link={link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default InstrumentsFeatures