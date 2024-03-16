import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { article1, article2, article3, article4, article5 } from './imports'

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Catch up on the latest trend in Ai</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={article1} date="Jan 3, 2022" title="The era of Ai with unlimited Possiblities" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={article2} date="Jan 3, 2022" title="The era of Ai with unlimited Possiblities" />
          <Article imgUrl={article3} date="Jan 3, 2022" title="The era of Ai is here" />
          <Article imgUrl={article4} date="Jan 3, 2022" title="The era of Ai with unlimited Possiblities" />
          <Article imgUrl={article5} date="Jan 3, 2022" title="The Time of Ai with has come" />
        </div> 
      </div>
    </div>

  )
}

export default Blog