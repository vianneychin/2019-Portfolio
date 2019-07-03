import React from 'react'
import UseAOS from '../_HOOKS/UseAos'
import { MainSkillsContainer, Main } from './styled'

function Skills({ background, textColor }) {
  UseAOS()
  return (
    <MainSkillsContainer id="skills" style={{ backgroundColor: background }}>
      <Main name="skills" style={{ color: textColor }}>
        <h1>skills</h1>
        <div>
          <div>
            <h2>Development</h2>
            <hr />
            <p>React</p>
            <p>React Native</p>
            <p>Xcode</p>
            <p>Redux</p>
            <p>Styled Components</p>
            <p>SASS/SCSS/LESS</p>
            <p>Responsive Design</p>
            <p>ECMAScript (2015 - 2016)</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>EJS</p>
            <p>Git</p>
            <p style={{ marginBottom: '4em' }}>GitHub</p>
          </div>
          <div>
            <div>
              <h2>Wireframe/Design</h2>
              <hr />
              <p>Zeplin.io</p>
              <p>Sketch</p>
              <p>Adobe XD</p>
              <p>Photoshop</p>
            </div>
          </div>
        </div>
      </Main>
    </MainSkillsContainer>
  )
}

export default Skills