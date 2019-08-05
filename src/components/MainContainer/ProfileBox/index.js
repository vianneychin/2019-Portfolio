import React from 'react'
import { Wrapper } from './styled'
import face from '../../../assets/face.PNG'

const ProfileBox = () => {
  return (
    <Wrapper>
      <img src={face} />
      <div>
        <h1>Vianney J. Chin</h1>
        <div>
          <h2>Frontend Developer</h2>
          <h2>Fullstack Developer</h2>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileBox
