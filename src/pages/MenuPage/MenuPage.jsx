import React from 'react'

import { images } from '../../constants'
import { IntroIMG, SpecialMenu } from '../../container'

function MenuPage() {
  return (
    <>
      <IntroIMG img={images.rinck_content} text='Menu'/>
      <SpecialMenu/>
    </>
  )
}

export default MenuPage