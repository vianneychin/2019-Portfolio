import React from 'react'
import { Wrapper } from './styled'
import face from '../../assets/face.PNG'

const Profile = () => {
  return (
    <Wrapper>
      <div className='Profile-Image'>
        <img src={face} />
      </div>
      <div className='Text-Container'>
        <h1 className='Name'>Vianney J. Chin</h1>
        <ul className='Title'>
          <li>Frontend Developer</li>
          <li>Fullstack Developer</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Profile
