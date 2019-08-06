import React from 'react'
import { Wrapper } from './styled'

const App = () => {
  return (
    <Wrapper>
      <nav className='Nav' />
      <div className='Center-Container'>
        <div className='Left-Container'>
          <div className='Profile' />
          <div className='Skills' />
          <div className='Contact' />
        </div>
        <div className='Right-Container' />
      </div>
    </Wrapper>
  )
}

export default App

/* 
   TODO
    • Create a center container.
    • Create initial layout for design.
    • 3 boxes on tshe left
    • 1 main box on the right to house the projects
    • Create a mobile design as well.
    • Try creating a secondary DIV container that will house sticky items on the left side.
 */
