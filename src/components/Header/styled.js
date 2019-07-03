import styled, { keyframes } from 'styled-components'

/* Main Body Div */
const Main = styled.header`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

/* Main content in header */
const MainWrapper = styled.div`
  height: 100vh;
  width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    font-weight: 100;
    @media(max-width: 390px) {
      font-size: 40px;
    }
  }
  h2 {
    font-family: 'Fira Mono', monospace;
    font-weight: 300;
    font-size: 18px;
  }
  p {
    font-weight: 200;
  }
  > div:nth-of-type(1) {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  > div:nth-of-type(2) {
    width: 290px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2em;
  }
  > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
      margin-top: 1em;
      margin-bottom: 1em;
      width: 50%;
    }
  }
  @media (min-width: 1000px) {
    h1 {
      font-size: 75px;
    }
    h2 {
      font-size: 24px;
    }
  }
`


/* This is the bouncing arrow in the Header */

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`
const Arrow = styled.div`
  height: 35px;
  width: 35px;
  border-style: solid;
  /* border-color: white; */
  border-width: 0px 3px 3px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
`
const DownArrow = styled.div`
  position: relative;
  top: 25%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11vh;
  animation: ${bounce} 2s infinite;
`

export {
  Main,
  MainWrapper,
  Arrow,
  DownArrow,
}