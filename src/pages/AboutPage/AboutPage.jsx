import React from 'react'
import { images } from '../../constants'
import { IntroIMG, AboutOurHistory, AboutHappyHours, AboutTestimony, AboutTheTeam } from '../../container'

function AboutPage() {
  return (
    <>
      <IntroIMG img={images.waldemar_brandt} text='Welcome to Gericht'/>
      <AboutOurHistory />
      <AboutHappyHours/>
      <AboutTheTeam/>
      <AboutTestimony/>
    </>
  )
}

export default AboutPage