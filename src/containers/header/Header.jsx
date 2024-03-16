import React from 'react'
import './header.css'
import people2 from '../../assets/people2.jpg'
import ai from '../../assets/ai.webp'

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build with RealAI
        </h1>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>

        <div className="gpt3__header-content__input">
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people2} alt='people'/>
          <p>1500 people requested access in the last 24 hours</p>
        </div>
      </div>
       
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header










