import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  > h1 {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
  }
  .Contact-Container {
    display: flex;
    height: 50%;
    align-items: center;
    > div {
      display: flex;
      width: 100%;
    }
  }
  .Social-Container {
    display: flex;
    height: 50%;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      > img {
        height: 25px;
        width: 25px;
      }
    }
  }
`

export { Wrapper }
