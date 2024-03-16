import React from 'react'
import './footer.css'
import logo from '../../assets/logo.avif'

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Begin your Journey into the world of Artificial Intelligence
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early access </p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Abuja City. All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Home</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Company</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Company</p>
          <p>Abuja city Abuja</p>
          <p>online@subscribe.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        <p>2023 RealA1. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer