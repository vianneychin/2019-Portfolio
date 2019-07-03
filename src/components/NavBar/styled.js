import styled from 'styled-components'


const Nav = styled.nav`
    background-color: rgb( 0,0,0, .85);
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 8vh;
    font-size: 1.2em;
  a {
    color: white;
  }
  a:hover {
    font-size: 1.5em
  }
  > div:nth-of-type(1) {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 600px) {
      width: 100%;
    }
  }
`

export default Nav