import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    min-width: 1200px;
    .Left-Container {
      height: 900px;
      width: 40%;
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
        background-color: pink;
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
      width: 60%;
      background-color: cornflowerblue;
      height: 2000px;
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
        height: 2000px;
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
