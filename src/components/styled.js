import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  .Nav {
    width: 100%;
    background-color: pink;
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
    /* min-width: 1200px; */
    max-width: 1355px;
    .Left-Container {
      height: 100vh;
      width: 34%;
      max-width: 538px;
      background-color: pink;
      display: flex;
      flex-direction: column;
      .Profile {
        background-color: ${props => props.theme.darkGreen};
        flex: 1;
        width: 100%;
        padding: 3.5%;
      }
      .Skills {
        background-color: ${props => props.theme.darkGreen};
        width: 100%;
        flex: 2;
        padding: 3.5%;
      }
      .Contact {
        background-color: green;
        flex: 1;
        width: 100%;
        padding: 3.5%;
      }
    }
    .Right-Container {
      width: 66%;
      max-width: 2000px;
      background-color: ${props => props.theme.darkPink};
      height: 2000px;
      padding: 1%;
      height: 2030px;
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
