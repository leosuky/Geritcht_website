import React from 'react'
import './customertestimony.css';
import { images } from '../../constants';

function CustomerTestimony({avatar, name, job, comment}) {
  return (
    <div className='customertestimony'>
        <div className="customertestimony-one">
            <div className='avatar'><img src={avatar} alt="avatar" /></div>
            <div className='quote'><img src={images.quote} alt="quote" /></div>
        </div>

        <div className="customertestimony-two">
            <p className="p__opensans">{comment}</p>
            <h4>{name}</h4>
            <p className="p__opensans">{job}</p>
        </div>
    </div>
  )
}

export default CustomerTestimony