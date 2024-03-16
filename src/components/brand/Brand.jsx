import React from 'react'
import './brand.css'
import { google,
  slack3,
  atlassian,
  //dropbox2,
  //shopify2
} from './import';

function Brand() {
  return (
    <div className='gpt3__brand section__brand'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={slack3} alt="slack3" />
      </div>
      

      {/*
      <div>
      <img src={shopify2} alt="shopify2" />
      </div> 
        <img src={dropbox2} alt="dropbox2" />
      </div>
      <div>
        */}
    </div>
  )
}

export default Brand

//1h36min








