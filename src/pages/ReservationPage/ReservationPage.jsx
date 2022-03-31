import React from 'react'
import { images } from '../../constants'
import { IntroIMG } from '../../container'
import { MakeAReservation } from '../../components'

function ReservationPage() {
  return (
    <>
      <IntroIMG img={images.jason_leung} text='Make a Reservation'/>
      <MakeAReservation/>
    </>
  )
}

export default ReservationPage