import React from 'react'
import { Wrapper } from './styled'
import useAos from '../../../hooks/useAos'
import githubIcon from '../../../assets/github.svg'

const ProjectCard = props => {
  useAos()
  return (
    <Wrapper data-aos-once='true' data-aos-duration='2000' data-aos='fade-up'>
      <div className='Project-Picture-Container'>
        <a href={props.linkTo}>
          <img src={props.image} alt={props.alt} />
        </a>
      </div>
      <div className='Project-Text-Container'>
        <div className='Title-Container'>
          <h1>{props.projectName}</h1>
          <div className='Github-Container'>
            <a href={props.github}>
              <img alt='github icon' src={githubIcon} />
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
