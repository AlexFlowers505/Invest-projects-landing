import React from 'react'
import ReactDom from 'react-dom'

import PartnersSVGasset from './components/global/PartnersSVGasset'
import Hero from './components/sections/01_0_hero/Hero'
import FeaturesInNumbersSlider from './components/sections/02-0_features-in-numbers/FeaturesInNumbersSlider'
import InstrumentsFeatures from './components/sections/03-0_instruments-features/InstrumentsFeatures'
import Maps from './components/sections/04_0_maps/Maps'
import ProjectBase from './components/sections/05_0_project-base/ProjectBase'
import TeamsUI from './components/sections/06_0_teams-UI/TeamsUI'
import HoldingsNindustrialSites from './components/sections/07_0_holdings-n-industrial-sites/HoldingsNindustrialSites'
import Analytics from './components/sections/08_0_analytics/Analytics'
import MiddleNav from './components/sections/09_0_middle-nav/MiddleNav'
import CEOquote from './components/sections/10_0_CEO_quote/CEOquote'
import RegisterCTA from './components/sections/12_0_register-cta/RegisterCTA'
import PartnersListing from './components/sections/11_0_partners-listing/PartnersListing'
import ContactUs from './components/sections/13_0_contact-us/ContactUs'
import Footer from './components/sections/14_0_footer/Footer'
import SiteNav from './components/global/site-nav/SiteNav'

function App() {
  return (
    <>
      <PartnersSVGasset/>
      <SiteNav/>
      <Hero/>
      <FeaturesInNumbersSlider/>
      <InstrumentsFeatures/>
      <div className="sliders-sections-wrapper">
        <Maps/>
        <ProjectBase/>
        {/* <TeamsUI/> */}
        <HoldingsNindustrialSites/>
        <Analytics/>
      </div>
      <MiddleNav/>
      {/* <CEOquote/> */}
      <PartnersListing/>
      <RegisterCTA/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
