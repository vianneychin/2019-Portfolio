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
          <div className='Github-Container'>
            <a href='#'>
              <img src={githubIcon} />
            </a>
          </div>
        </div>
        <div className='Technologies-Used-Container'>
          <h2>Technologies Used:</h2>
          <div>
            <p>{props.technologiesUsed}</p>
          </div>
        </div>
        <br />
        <div className='About-Container'>
          <h2>About:</h2>
          <div>
            <p>{props.about}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectCard
