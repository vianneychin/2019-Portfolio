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
        <ProjectCard
          image={safeParkingLA}
          projectName='SafeParkingLA'
          technologiesUsed='React, React Router, Styled Components, JavaScript, HTML5, CSS3, Zeplin, Git, Github'
          about='A hackathon project made in the course of a three day sprint. This website was created to assist the homeless living in their cars and provide them the necessary resources for safe, legal, and overnight parking. Data was gathered from an excel spreadsheet and converted into JSON format to search for resources such as food, supplies, showers, etc. '
        />
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
