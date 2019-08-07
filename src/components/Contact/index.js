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
          <a href='tel:213-716-5106'>
            <p>(213) 716 - 5106</p>
          </a>
        </div>
        <div>
          <span>📬</span>
          <a href='mailto:vianneyjchin@gmail.com'>
            <p>vianneyjchin@gmail.com</p>
          </a>
        </div>
      </div>
      <div className='Social-Container'>
        <div>
          <img src={githubIcon} />
          <a href='https://github.com/vianneychin'>
            <p>GitHub</p>
          </a>
        </div>
        <div>
          <img src={linkedinIcon} />
          <a href='https://www.linkedin.com/in/vianneyjchin/'>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

// Create two rows.
// one row house the icons
// the second row house the text content

export default Contact
