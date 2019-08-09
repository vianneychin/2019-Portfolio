import React from 'react'
import { Wrapper } from './styled'

const Nav = () => {
  return (
    <Wrapper>
      <div>
        <a>Skills</a>
      </div>
      <div>
        <a>Projects</a>
      </div>
      <div>
        <a>Contact</a>
      </div>
    </Wrapper>
  )
}
// Nav should have ..
// • Skills
// • Projects
// • Contact
// • Home Icon SVG just to go back to top

export default Nav
