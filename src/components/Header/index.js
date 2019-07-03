import React from 'react'
import UseAOS from '../_HOOKS/UseAos'
import {
  Main,
  MainWrapper,
  Arrow,
  DownArrow,
} from './styled'


function Header({ background, textColor }) {
  UseAOS()
  return (


    <Main style={{ backgroundColor: background }}>
      <MainWrapper style={{ color: textColor, marginBottom: '10em' }}>
        <h1>Vianney Chin</h1>
        <div data-aos="fade-down">
          <h2>Web Designer,</h2>
          <h2>Frontend Web Developer</h2>
        </div>
        <div data-aos="fade-down">
          <a style={{ color: textColor }} href="https://github.com/vianneychin">Github</a>
          <a style={{ color: textColor }} href="https://www.linkedin.com/in/vianneyjchin/">LinkedIn</a>
        </div>
        <div data-aos="fade-down">
          <h2>Contact</h2>
          <hr />
          <p>(213) 716 - 5106</p>
          <p>vianneyjchin@gmail.com</p>
        </div>
        <DownArrow>
          <a>
            <Arrow style={{ borderColor: textColor }}></Arrow>
          </a>
        </DownArrow>
      </MainWrapper>
    </Main >
  )
}

export default Header