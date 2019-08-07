import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2.5%;
  display: flex;
  height: 350px;
  .Project-Picture-Container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-right: 3%;
    img {
      width: 100%;
      border-radius: 4px;
      box-shadow: ${props => props.theme.shadow};
    }
  }
  .Project-Text-Container {
    width: 50%;
    padding: 2.5%;
    background-color: white;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 4px;
    .Title-Container {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
      }
      .Github-Container {
        a {
          img {
            height: 40px;
          }
        }
      }
    }
  }
  .Technologies-Used-Container {
    h2 {
      color: ${props => props.theme.secondary};
    }
    div {
      p {
        white-space: normal;
        color: ${props => props.theme.secondary};
      }
    }
  }
  .About-Container {
    h2 {
      color: ${props => props.theme.secondary};
    }
    div {
      p {
        white-space: normal;
        color: ${props => props.theme.secondary};
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
