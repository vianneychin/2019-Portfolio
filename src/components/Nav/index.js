import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styled'

const Nav = () => {
  return (
    <Wrapper>
      <div>
        <AnchorLink offset='100' href='#skills'>
          Skills
        </AnchorLink>
      </div>
      <div>
        <AnchorLink offset='100' href='#projects'>
          Projects
        </AnchorLink>
      </div>
      <div>
        <AnchorLink offset='100' href='#contact'>
          Contact
        </AnchorLink>
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
