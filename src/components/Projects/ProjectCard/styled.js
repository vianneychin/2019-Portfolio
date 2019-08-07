import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2.5%;
  display: flex;
  height: 350px;
  .Project-Picture-Container {
    width: 50%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    /* align-self: center; */
    img {
      width: 100%;
    }
  }
  .Project-Text-Container {
    width: 50%;
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
    div {
      p {
        white-space: normal;
      }
    }
  }
  .About-Container {
    div {
      p {
        white-space: normal;
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
