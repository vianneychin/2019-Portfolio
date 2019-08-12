import React from 'react'
import { Wrapper } from './styled'
import face from '../../assets/face.jpg'

const Profile = () => {
  return (
    <Wrapper>
      <div className='Profile-Image'>
        <img alt='face-shot' src={face} />
      </div>
      <div className='Text-Container'>
        <h1 className='Name'>Vianney J. Chin</h1>
        <ul className='Title'>
          <li>Frontend | Fullstack Developer</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Profile
