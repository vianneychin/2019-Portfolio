import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 220px;
  width: 606px;
  @media(max-width: 700px) {
    width: 100%;
      img {
        width: 300.5px;
      }
    }
  > div:nth-of-type(1) {
    > img {
      padding-top: 1.7em;
      padding-bottom: 1.7em;
    }
  }
  h1 {
    text-align: center;
    font-weight: 200;
  
  div:nth-of-type(2) {
    width: 500px;
    label {
      font-weight: 500;
      font-size: 1.2em;
    }
  }
}
`


export {
  MainContainer

}