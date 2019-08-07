import React from 'react'
import { Wrapper } from './styled'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

const Contact = () => {
  return (
    <Wrapper>
      <h1>contact</h1>
      <div className='Contact-Container'>
        <div>
          <span>📞</span>
          <p>(213) 716 - 5106</p>
        </div>
        <div>
          <span>📬</span>
          <p>vianneyjchin@gmail.com</p>
        </div>
      </div>
      <h1>social handles</h1>
      <div className='Social-Container'>
        <div>
          <img src={githubIcon} />
          <p>GitHub</p>
        </div>
        <div>
          <img src={linkedinIcon} />
          <p>LinkedIn</p>
        </div>
      </div>
    </Wrapper>
  )
}

// Create two rows.
// one row house the icons
// the second row house the text content

export default Contact
