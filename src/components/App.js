import React from 'react'
import { Wrapper } from './styled'
import Profile from './Profile'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'

const App = () => {
  return (
    <Wrapper>
      <nav className='Nav' />
      <div className='Center-Container'>
        <div className='Left-Container'>
          <div className='Profile'>
            <Profile />
          </div>
          <div className='Skills'>
            <Skills />
          </div>
          <div className='Contact'>
            <Contact />
          </div>
        </div>
        <div className='Right-Container'>
          <Projects />
        </div>
      </div>
    </Wrapper>
  )
}

export default App
