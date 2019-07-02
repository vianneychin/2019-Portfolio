import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Nav from './styled'


function NavBar() {
  return (
    <Nav>
      <div>
        <AnchorLink href='#home'>HOME</AnchorLink>
        <AnchorLink href='#skills'>SKILLS</AnchorLink>
        <AnchorLink href='#projects'>PROJECTS</AnchorLink>
      </div>
    </Nav>
  )

}

export default NavBar