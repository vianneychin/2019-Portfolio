import React from 'react'
import { Wrapper } from './styled'
import githubIcon from '../../../assets/github.svg'

const ProjectCard = props => {
  return (
    <Wrapper>
      <div className='Project-Picture-Container'>
        <img src={props.image} />
      </div>
      <div className='Project-Text-Container'>
        <div className='Title-Container'>
          <h1>{props.projectName}</h1>
          <div>
            <img src={githubIcon} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectCard
