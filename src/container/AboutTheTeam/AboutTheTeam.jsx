import React from 'react'
import './abouttheteam.css'

import { SubHeading } from '../../components'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { images } from '../../constants'


const chefs = [
    {id:1, name:'Kevin Luo', avatar:images.kevin_luo, title: 'Head Chef'},
    {id:2, name:'Patrick Choi', avatar:images.patrick_choi, title: 'Deputy Chef'},
    {id:3, name:'Jack Biscoff', avatar:images.Jack_biscoff, title: 'Station Chef'},
    {id:4, name:'Stacy Lee', avatar:images.stacy_lee, title: 'Station Chef'},
    {id:5, name:'Aren Goodman', avatar:images.Aren_goodman, title: 'Junior Chef'},
    {id:6, name:'Javier Dowsing', avatar:images.javier_dowsing, title: 'Junior Chef'},
]

function AboutTheTeam() {
  return (
    <div className='about__Team section__padding flex__center'>
        <SubHeading title="Chefs" />
        <h1 className="headtext__cormorant">Meet The Team</h1>

        <div className="about__Team-chef">
            {
                chefs.map(item => (
                    <div className="about__Team-chef_item" key={item.id}>
                        <div className='chef'>
                            <img src={item.avatar} alt="chefteam" />
                            <div className="about__Team-chef_item-icons">
                                <BsFacebook className='chef_icons'/>
                                <BsTwitter className='chef_icons'/>
                                <BsInstagram className='chef_icons'/>
                            </div>
                        </div>
                        <h4>{item.name}</h4>
                        <p className="p__opensans">{item.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutTheTeam