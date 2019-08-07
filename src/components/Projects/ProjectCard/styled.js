import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2.5%;
  display: flex;
  .Project-Picture-Container {
    width: 50%;
    height: 250px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .Project-Text-Container {
    width: 50%;
    height: 250px;
    background-color: pink;
    padding: 2.5%;
    .Title-Container {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 20px;
        font-weight: 400;
        line-height: 40px;
      }
      div {
        img {
          height: 40px;
        }
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    flex-direction: column;
    .Project-Picture-Container,
    .Project-Text-Container {
      width: 100%;
    }
  }
`

export { Wrapper }
