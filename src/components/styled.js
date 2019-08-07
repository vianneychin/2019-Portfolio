import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  .Nav {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    visibility: hidden;
  }
  .Center-Container {
    background-color: darkgrey;
    display: flex;
    height: 100%;
    width: 80%;
    max-width: 1355px;
    .Left-Container {
      height: 100vh;
      width: 34%;
      max-width: 538px;
      display: flex;
      flex-direction: column;
      position: fixed;
      .Profile {
        background-color: ${props => props.theme.offWhite};
        flex: 1;
        width: 100%;
        padding: 3.5%;
      }
      .Skills {
        background-color: ${props => props.theme.offWhite};
        width: 100%;
        flex: 2;
        padding: 3.5%;
      }
      .Contact {
        background-color: ${props => props.theme.offWhite};
        flex: 1;
        width: 100%;
        padding: 3.5%;
      }
    }
    .Right-Container {
      width: 66%;
      max-width: 2000px;
      background-color: ${props => props.theme.beige};
      height: 100%;
      padding: 1%;
      height: 2030px;
      margin-left: 40%;
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    .Center-Container {
      min-width: 0;
      flex-direction: column;
      margin-top: 100.4px;
      .Left-Container {
        width: 100%;
        height: 1000px;
      }
      .Right-Container {
        height: 100%;
        width: 100%;
      }
    }
    .Nav {
      visibility: visible;
      margin-bottom: 100px;
    }
  }
`

export { Wrapper }
