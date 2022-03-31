import React from 'react'
import { Header, AboutUs, Chef, Intro, Laurels, Gallery, FindUs } from '../../container'
import { meal } from '../../constants'

function HomePage() {
  return (
    <>
      <Header/>
      <AboutUs/>
      <Chef />
      <Intro video={meal}/>
      <Laurels />
      <Gallery />
      <FindUs />
    </>
  )
}

export default HomePage