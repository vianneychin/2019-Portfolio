import React from 'react'
import { Wrapper } from './styled'
import { Tools } from '../../assets/svg'

const Skills = () => {
  return (
    <Wrapper>
      <div className='Development-Skills'>
        <h1 style={{ fontWeight: 500 }}>
          Tools
          <span>
            <Tools />
          </span>
        </h1>
        <hr />
        <div className='Frontend-Skills'>
          <h1>Frontend</h1>
          <hr />
          <div className='Frontend-Content'>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>jQuery</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>React Native</span>
            <span>Redux.js</span>
            <span>TypeScript</span>
            <span>Bootstrap</span>
            <span>Semantic UI</span>
            <span>Material UI</span>
            <span>Styled Components</span>
            <span>Zeplin.io</span>
          </div>
        </div>
        <div className='Backend-Skills'>
          <h1>Backend</h1>
          <hr />
          <div className='Backend-Content'>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Mongoose.js</span>
            <span>Express.js</span>
            <span>Passport.js</span>
            <span>GraphQL</span>
            <span>Python 3</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills
