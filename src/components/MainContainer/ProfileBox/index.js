import React from 'react'
import { Wrapper } from './styled'
import face from '../../../assets/face.PNG'

const ProfileBox = () => {
  return (
    <Wrapper>
      <img src={face} />
      <h1>Vianney J. Chin</h1>
    </Wrapper>
  )
}

export default ProfileBox
