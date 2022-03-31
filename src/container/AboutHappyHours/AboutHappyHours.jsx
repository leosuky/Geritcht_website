import React from 'react'

import './abouthappyhours.css';
import { SubHeading } from '../../components';
import Intro from '../Intro/Intro';
import { mixkit } from '../../constants';


function AboutHappyHours() {
  return (
    <div className='about__happyhours section__padding flex__center'>
        <SubHeading title="About Us" />
        <h1 className="headtext__cormorant">Happy Hours With Us</h1>
        <div className='about__happyhours-text'>
            <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
        </div>

        <Intro video={mixkit}/>
    </div>
  )
}

export default AboutHappyHours