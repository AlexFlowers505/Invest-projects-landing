import React, { useEffect, useRef, useState } from "react"

import Tabs from "./insides/Tabs"
import TabDataHolder from "./insides/TabDataHolder"
import SliderLinks from "./insides/SliderLinks"



const MultilevelSlider = ({sliderData}) => {
  const {tabs, linksInfo} = sliderData
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [activeInnerSlideIndex, setActiveInnerSlideIndex] = useState(0)
  return (
    <div className="multilevel-slider__outer-wrapper">
      <Tabs tabs={tabs}
            setActiveTab={setActiveTab} 
            activeTab={activeTab}
            setActiveInnerSlideIndex={setActiveInnerSlideIndex}
      />
      <div className="multilevel-slider__no-tabs-nav-wrapper">
        <TabDataHolder activeTab={activeTab}
                       activeInnerSlideIndex={activeInnerSlideIndex}
                       setActiveInnerSlideIndex={setActiveInnerSlideIndex}
        />
        <SliderLinks linksInfo={linksInfo}/>
      </div>
    </div>
  )
}

export default MultilevelSlider