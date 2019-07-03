import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'
import UseToggle from './_HOOKS/UseToggle'
import '../global.css'

const PinkModeButton = styled.button`
  background-color: babypink;
  position: absolute;
  margin-top: -3em;
  top: 79%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 1.2em;
  padding-right: 1.2em;
  padding-top: .7em;
  padding-bottom: .7em;
  font-size: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5), 0 15px 40px rgba(166, 173, 201, 0.2);

`

const App = () => {
  const { renderLightOrDarkMode, background, textColor, modeText } = UseToggle()
  return (
    <>
      <PinkModeButton onClick={renderLightOrDarkMode}>
        {modeText}
      </PinkModeButton>

      <NavBar />

      <section id='home'>
        <Header
          background={background}
          textColor={textColor}
        />
      </section>
      <section id='skills'>
        <Skills
          background={background}
          textColor={textColor}
        />
      </section>
      <section id='projects'>
        <Projects
          background={background}
          textColor={textColor}
        />
      </section>
    </>
  )
}
export default App