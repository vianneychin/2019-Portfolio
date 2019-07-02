import styled from 'styled-components'

const MainSkillsContainer = styled.div`
  height: 126vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 100vh;
  hr {
    margin-bottom: 2em;
    margin-top: 1em;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
  h2 {
    font-weight: 500;
    font-size: 18px
  }
  p {
    font-size: 18px;
    font-weight: 100;
  }
  > h1 {
    margin-bottom: 2em;
    font-size: 50px;
    font-weight: 100;
  }
  > div:nth-of-type(1) {
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`



export {
  MainSkillsContainer,
  Main
}