import React from 'react'
import './realai.css'
import { Feature } from '../../components'

function RealAI() {
  return (
      <div className="gpt3__realai section__margin" id="realAI">
        <div className="gpt3__realai-feature">
          <Feature title="What is RealAI" text="The unlimited source of information. Work companion. Offers applicable knowledge in or various fields"/>
        </div>
  
        <div className="gpt3__realai-heading">
          <h1 className="gradient__text">
            The possibilites are beyond imagination
          </h1>
          <p>Explore the Library</p>
        </div>
  
        <div className="gpt3__realai-container">
          <Feature title="Chatbot" text= "Communicate and share ideas wtith the real AI"/>
          <Feature title="KnowedgeBase" text= "Experience the true power of knowledge with the help of realAI"/>
          <Feature title="Education" text="Learning a lot and much more from realAI"/>
        </div>
      </div>
  )


}

export default RealAI


