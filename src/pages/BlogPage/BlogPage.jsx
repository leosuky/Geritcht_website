import React from 'react'
import { Blog } from '../../components'
import { images } from '../../constants'
import { IntroIMG } from '../../container'

import './blogpage.css';


const blogz = [
  {id:'1',date:'17 June 2021', title:'Co-ordination & Teamwork Tips From A Sous CHef', author:'Kaitlyn B', img:images.blog_rene},
  {id:'2',date:'23 May 2021', title:'Summer Cocktails And Mocktails', author:'John Michael', img:images.blog_john},
  {id:'3',date:'16 Apr 2021', title:'Tips For Prepping And Caring For Your Grill', author:'Annalisa L', img:images.blog_hermann},
  {id:'4',date:'16 Mar 2021', title:'How To Make Your Food Photographs Look Aesthetic', author:'Andrial M', img:images.blog_valeria},
]



function BlogPage() {
  return (
    <>
      <IntroIMG img={images.blog_background} text='Our Blog'/>
      <div className='section__padding flex__center' style={{
        backgroundColor: 'var(--color-black)',
        display:'flex',
        flexWrap: 'wrap',
        alignItems:'center',
      }}>
        {
          blogz.map(blog => (

            <div className='blog_item'>
              <Blog
                key={blog.id}
                author={blog.author}
                title={blog.title}
                date={blog.date}
                img={blog.img}
              />
            </div>

          ))
        }

      </div>

      <div className="section__padding flex__center" style={{backgroundColor: 'var(--color-black)'}}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </>
    
  )
}

export default BlogPage