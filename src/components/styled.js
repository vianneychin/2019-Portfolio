import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  .Nav {
    width: 100%;
    height: 75px;
    position: fixed;
    top: 0;
    visibility: hidden;
    z-index: 1;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  }
  .Center-Container {
    display: flex;
    height: 100%;
    width: 1347px;
    @media (max-width: ${props => props.theme.dimensions.mobile}) {
      width: 80%;
    }

    .Left-Container {
      height: 96.5vh;
      width: 538px;
      display: flex;
      flex-direction: column;
      position: fixed;
      background-color: white;
      margin-top: 2%;
      @media (max-width: ${props => props.theme.dimensions.mobile}) {
        width: 34%;
      }
      .Profile {
        background-color: ${props => props.theme.offWhite};
        flex: 1;
        width: 100%;
        padding: 3.5%;
      }
      .Skills {
        background-color: ${props => props.theme.offWhite};
        width: 100%;
        flex: 1.75;
        padding: 3.5%;
      }
      .Contact {
        background-color: ${props => props.theme.offWhite};
        flex: 1.25;
        width: 100%;
        padding: 3.5%;
      }
    }
    .Right-Container {
      width: 66%;
      max-width: 2000px;
      background-color: ${props => props.theme.beige};
      height: 101%;
      padding: 1%;
      margin-left: 42%;
      position: relative;
      left: 0;
      margin-top: 3.75%;
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    .Center-Container {
      min-width: 0;
      flex-direction: column;
      margin-top: 100.4px;
      .Left-Container {
        width: 100%;
        height: 1100px;
        position: inherit;
        margin-left: 2.5%;
      }
      .Right-Container {
        height: 100%;
        width: 100%;
        margin-left: 0;
        margin-top: 100px;
      }
    }
    .Nav {
      visibility: visible;
      margin-bottom: 100px;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`

export { Wrapper }
