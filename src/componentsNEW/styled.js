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
    height: 2000px;
    width: 80%;
    min-width: 1200px;
    .Left-Container {
      width: 50%;
      background-color: pink;
      display: flex;
      flex-direction: column;
      .one {
        background-color: red;
        flex: 1;
        width: 100%;
      }
      .two {
        background-color: yellow;
        width: 100%;
        flex: 1;
      }
      .three {
        background-color: green;
        flex: 1;
        width: 100%;
      }
    }
    .Right-Container {
      width: 50%;
      background-color: cornflowerblue;
    }
  }
  @media (max-width: 450px) {
    .Center-Container {
      min-width: 0;
      flex-direction: column !important;
      .Left-Container {
        width: 100%;
        height: 100%;
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
