import React from 'react'
import { Wrapper } from './styled'
import ProjectCard from './ProjectCard'

import connectFourOne from '../../assets/screenshots/connect-four-one.png'
import connectFourTwo from '../../assets/screenshots/connect-four-two.png'
import californature from '../../assets/screenshots/californature.png'
import weatherful from '../../assets/screenshots/weatherful.png'
import muscleMaker from '../../assets/screenshots/muscle-maker.png'
import safeParkingLA from '../../assets/screenshots/safe-parking-la.png'

const Projects = () => {
  return (
    <Wrapper>
      <div className='Title'>
        <h1>projects</h1>
      </div>
      <div className='Projects-Container'>
        <ProjectCard image={safeParkingLA} projectName='SafeParkingLA' />
        <ProjectCard image={muscleMaker} />
        <ProjectCard image={weatherful} />
        <ProjectCard image={californature} />
        <ProjectCard image={connectFourTwo} />
        <ProjectCard image={connectFourOne} />
      </div>
    </Wrapper>
  )
}

export default Projects
