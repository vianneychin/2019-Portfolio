import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  p {
    margin-top: 5px;
  }
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: 400;
      letter-spacing: 0.75px;
      > span {
        font-size: 30px;
      }
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
      letter-spacing: 0.75px;
      > img {
        height: 40px;
        width: 40px;
        margin-top: 10px;
      }
    }
  }
`

export { Wrapper }
