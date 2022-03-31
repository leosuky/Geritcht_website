import React from 'react'
import { IntroIMG } from '../../container'
import { Map } from '../../components'
import { images } from '../../constants'

import './contactuspage.css';

function ContactUsPage() {
  return (
    <>
      <IntroIMG img={images.waldemar_brandt} text='Contact Us'/>
      
      <div className="contactus_message section__padding flex__center">

        <div className="contactus_message-form">
          <form>
            <div>
                <input type="text" placeholder='Full Name...'/>
            </div>
            <div>
                <input type='email' placeholder='Email Address...' />
            </div>
            <div>
                <textarea 
                    name="info" id="info" 
                    cols="85" rows="10"
                    placeholder='Message...'
                ></textarea>
            </div>
          </form>
        </div>

        <div className="contactus_message-img">
          <img src={images.laurels} alt="laurels" />
        </div>

      </div>

      <Map/>
    </>
  )
}

export default ContactUsPage