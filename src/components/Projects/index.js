import React from 'react'
import { Wrapper } from './styled'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Wrapper>
      <div className='Title'>
        <h1>projects</h1>
      </div>
      <div className='Projects-Container'>
        <ProjectCard />
      </div>
    </Wrapper>
  )
}

export default Projects
