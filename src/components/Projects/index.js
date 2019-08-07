import React from 'react'
import { Wrapper } from './styled'

const Projects = props => {
  return (
    <Wrapper>
      <div className='Title'>
        <h1>projects</h1>
      </div>
      <div className='Projects-Container'>{props.children}</div>
    </Wrapper>
  )
}

export default Projects
