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

/* 
  * CONTACT
    • Phone: (213) 716 - 5106
    • Email: vianneyjchin@gmail.com
    • Github
    • LinkedIn
 */

/* 
* DEVELOPMENT
  • Git
  • Github
  • NPM (Node Package Manager)
    • day.js
    • moment.js
    • axios
    • bcrypt.js
    • lodash
    • aos
    • cookie-session
    • concurrently
    • http-proxy-middleware

* FRONTEND DEVELOPMENT
  • HTML5
  • CSS3
  • jQuery
  • JavaScript  (ES5+)
  • React.js
    • react-router-dom
    • react-hooks
  • React-Native
    • react-native-router-flux
    • react-navigation
  • Redux.js
    • react-redux
    • redux-thunk
    • redux-form
  • TypeScript
  • SASS/SCSS
  • Bootstrap
  • Material UI
  • Semantic UI
  • Styled Components
  • EJS (Embedded JavaScript Templating)
  • Jinja 2
  • Zeplin.io

* BACKEND DEVELOPMENT
  • Node.js
  • MongoDB
  • Mongoose.js
  • Express.js
    • express-session
  • GraphQL
    • express-graphql
  • Python 3
  • PostgreSQL
 */

export default Skills
