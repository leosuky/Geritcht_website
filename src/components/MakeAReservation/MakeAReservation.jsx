import React from 'react'
import './MakeAReservation.css'
import SubHeading from '../SubHeading/SubHeading'

function MakeAReservation() {
  return (
    <div className='makeReservation section__padding flex__center'>
        <SubHeading title="Reservation" />
        <p className="p__cormorant">We look forward to seeing you</p>

        <div className="makeReservation-Form">
            <form>
                <div>
                    <input type="text" placeholder='Name...'/>
                </div>
                <div>
                    <input type='tel' placeholder='Phone number...' />
                </div>
                <div>
                    <input type='email' placeholder='Email...' />
                </div>
                <div>
                    <input type='number' placeholder='Number of Guests' />
                </div>
                <div>
                    <textarea 
                        name="info" id="info" 
                        cols="85" rows="10"
                        placeholder='Additional information...'
                    ></textarea>
                </div>
                <div className='makeReservation-Form_datetime'>
                    <div>
                        <p className="p__cormorant">Select Date</p>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div>
                        <p className="p__cormorant">Select Time</p>
                        <input type="time" name="time" id="time" />
                    </div>
                </div>
                <div>
                    <button type="button" className="custom__button">BOOK NOW</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MakeAReservation