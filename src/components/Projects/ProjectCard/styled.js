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
    a {
      img {
        width: 100%;
        border-radius: 4px;
        box-shadow: ${props => props.theme.shadow};
        :hover {
          cursor: pointer;
          border: 3px solid rgb(0, 0, 0, 0.4);
          ::after {
            content: '';
            display: block;
            position: absolute;
            background-color: red;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  .Project-Text-Container {
    width: 50%;
    padding: 15px;
    background-color: white;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 4px;
    min-width: 305.5px;
    margin-bottom: 30px;
    padding: 3%;
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
