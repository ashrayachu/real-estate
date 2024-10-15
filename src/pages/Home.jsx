import React from 'react'
import Slider from '../components/Slider'
// import Banner from '../components/Banner'

import Private from '../components/Private'
import Video from '../components/Video'
import PropertySlider from '../components/PropertySlider'
import Form from '../components/Form'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
  return (
    //  <Banner/> 
    <>
      <Navbar/>
      <Slider />
      <Private />
      <Video />
      <PropertySlider/>
      <Form/>
      <Team/>
      <Footer/>
    </>
  )
}

export default Home