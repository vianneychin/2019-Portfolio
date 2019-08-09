import React from 'react'
import { Wrapper } from './styled'
import Profile from './Profile'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Nav from './Nav'

const App = () => {
  return (
    <Wrapper>
      <nav className='Nav'>
        <Nav />
      </nav>
      <div className='Center-Container'>
        <div className='Left-Container'>
          <div className='Profile'>
            <Profile />
          </div>
          <div id='skills' className='Skills'>
            <Skills />
          </div>
          <div id='contact' className='Contact'>
            <Contact />
          </div>
        </div>
        <div id='projects' className='Right-Container'>
          <Projects />
        </div>
      </div>
    </Wrapper>
  )
}

export default App
