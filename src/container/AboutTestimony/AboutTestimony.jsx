import React from 'react'
import './abouttestimony.css';

import { SubHeading, CustomerTestimony } from '../../components';
import { images } from '../../constants';


const testimonies = [
  {id:1, avatar:images.wade_warren, name:'Wade Warren', job:'Engineer'},
  {id:2, avatar:images.jane_cooper, name:'Jane Cooper', job:'Chef'},
  {id:3, avatar:images.robert_fox, name:'Robert Fox', job:'Chef'},
  {id:4, avatar:images.Brooklyn_SImmons, name:'Brooklyn Simmons', job:'Medical Doctor'},
]

function AboutTestimony() {
  return (
    <div className='about__testimony section__padding flex__center'>
        <SubHeading title="Testimony" />
        <h1 className="headtext__cormorant">Happy Customers</h1>

        <div className="about__testimony-testimonies">
          {
            testimonies.map((item) => (
              <CustomerTestimony 
                key={item.id}
                avatar={item.avatar}
                comment='Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
                name={item.name}
                job={item.job}
              />
            ))
          }
        </div>
    </div>
  )
}

export default AboutTestimony