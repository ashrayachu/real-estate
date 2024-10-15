import React from 'react'

import Slider from '../components/Slider'
import Private from '../components/Private'
import Video from '../components/Video'
import PropertySlider from '../components/PropertySlider'
import Form from '../components/Form'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
  return (
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