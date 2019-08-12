import React from 'react'
import { Wrapper } from './styled'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import { CallIcon, EmailIcon } from '../../assets/svg'

const Contact = () => {
  return (
    <Wrapper>
      <h1 style={{ fontWeight: '500' }}>Contact </h1>
      <hr />
      <div className='Contact-Container'>
        <div>
          <a href='tel:213-716-5106'>
            <span>
              <CallIcon />
            </span>
            <p>(213) 716 - 5106</p>
          </a>
        </div>
        <div>
          <a href='mailto:vianneyjchin@gmail.com'>
            <span>
              <EmailIcon />
            </span>
            <p>vianneyjchin@gmail.com</p>
          </a>
        </div>
      </div>
      <div className='Social-Container'>
        <div>
          <a href='https://github.com/vianneychin'>
            <img alt='github icon' src={githubIcon} />
            <p>GitHub</p>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/vianneyjchin/'>
            <img alt='linkedin icon' src={linkedinIcon} />
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
