import React from 'react'
import { Wrapper } from './styled'

const Skills = () => {
  return (
    <Wrapper>
      <div className='Development-Skills'>
        <h1 style={{ fontWeight: 500 }}>
          development
          <span
            role='img'
            aria-label='person working behind a computer emoji'
            style={{ fontSize: '20px', marginLeft: '2.5%' }}
          >
            👨‍💻
          </span>
        </h1>
        <hr />
        <div className='Frontend-Skills'>
          <h1>frontend</h1>
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
            <span>EJS</span>
            <span>Jinja 2</span>
            <span>Zeplin.io</span>
          </div>
        </div>
        <div className='Backend-Skills'>
          <h1>backend</h1>
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
