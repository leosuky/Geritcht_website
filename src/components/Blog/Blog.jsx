import React from 'react'
import './blog.css';

function Blog({img, date, author, title}) {
  return (
    <div className='blog__card'>
        <div className="blog__card-image">
            <img src={img} alt="blog_hermann" />
        </div>

        <div className="blog__card-undertext">
            <div className="blog__card-undertext_date">
                <p>{date}</p>
            </div>
            <div className="blog__card-undertext_author">
                <p>- {author}</p>
            </div>
        </div>

        <div className="blog__card-title">
            <h4>{title}</h4>
        </div>

        <div className="blog__card-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        </div>

        <div className="blog__card-read">
            <h6>- Read More</h6>
        </div>
    </div>
  )
}

export default Blog