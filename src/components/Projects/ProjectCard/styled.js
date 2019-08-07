import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2.5%;
  display: flex;
  .Project-Picture-Container {
    width: 50%;
    height: 250px;
    background-color: grey;
  }
  .Project-Text-Container {
    width: 50%;
    height: 250px;
    background-color: pink;
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
