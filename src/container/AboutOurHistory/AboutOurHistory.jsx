import React from 'react'
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './aboutourhistory.css'

function AboutOurHistory() {
  return (
    <div className="about__ourhistory section__padding flex__center">
        <SubHeading title="Our History" />
        <h1 className="headtext__cormorant">Serving Customers For Over A Decade</h1>

        <div className="about__ourhistory-othershit">
            <div className="about__ourhistory-othershit_left">
            <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
            <div><img src={images.rachel_claire} alt="rachel" /></div>
            </div>

            <div className="about__ourhistory-othershit_space"></div>

            <div className="about__ourhistory-othershit_right">
            <div><img src={images.quark_studio} alt="quark" /></div>
            <h5 className="headtext__cormorant">Over The Years</h5>

            <div className="about__ourhistory-othershit_right-oty">
                <SubHeading title='30+' col='#dcca87' extra='Breakfast Options'/>
                <div className="about__ourhistory-othershit_space-oty"></div>
                <SubHeading title='50+' col='#dcca87' extra='Dinner Options'/>
                <div className="about__ourhistory-othershit_space-oty"></div>
                <SubHeading title='8' col='#dcca87' extra='New Locations'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutOurHistory