import styled from 'styled-components'

const MainProjectsContainer = styled.div`
  height: 100%;
  
  @media (max-width: 420px) {
      height: 900vh;
    }
  > div:nth-of-type(1) {
    height: 100%;
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    > h1:nth-of-type(1) {
      font-weight: 200;
      font-size: 50px;
      text-align: center;
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }
`
export default MainProjectsContainer