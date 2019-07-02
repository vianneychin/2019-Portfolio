import styled from 'styled-components'

const MainProjectsContainer = styled.div`
  height: 780vh;
  
  @media (max-width: 700px) {
      height: 820vh;
    }
  > div:nth-of-type(1) {
    height: 780vh;
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    justify-content: CENTER;
    align-items: center;
    flex-direction: column;
    @media (max-width: 700px) {
      height: 820vh;
    }
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