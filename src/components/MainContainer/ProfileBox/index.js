import React from 'react'
import { Wrapper } from './styled'
import face from '../../../assets/face.PNG'

const ProfileBox = () => {
  return (
    <Wrapper>
      <div>
        <div className='ProfileImage'>
          <img src={face} />
        </div>
        <div>
          <h1 className='Name'>Vianney J. Chin</h1>
          <ul className='Title'>
            <li>Frontend Developer</li>
            <li>Fullstack Developer</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileBox
