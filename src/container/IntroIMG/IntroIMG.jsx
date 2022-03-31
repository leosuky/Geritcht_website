import React from 'react'
import './introimg.css';

function IntroIMG({img, text}) {
  return (
    <div className='app__image'>
        <img src={img} alt="backgroung here" />

        <div className="app__image-overlay flex__center">
            <h1 className="headtext__cormorant">{text}</h1>
        </div>
    </div>
  )
}

export default IntroIMG