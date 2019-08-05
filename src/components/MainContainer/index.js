import React from 'react'
import { Wrapper } from './styled'
import ProfileBox from './ProfileBox'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

const MainContainer = () => {
  return (
    <Wrapper>
      <ProfileBox />
      <Projects />
      <Contact />
      <Skills />
    </Wrapper>
  )
}

export default MainContainer
