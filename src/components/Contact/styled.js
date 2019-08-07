import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5%;
  p {
    margin-top: 5px;
  }
  hr {
    width: 25%;
    align-self: center;
    margin-top: 1%;
    margin-bottom: 1%;
    /* remember to change the color of this hr */
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
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: 400;
      letter-spacing: 0.75px;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > span {
          font-size: 30px;
        }
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
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img {
          height: 40px;
          width: 40px;
          margin-top: 10px;
        }
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    p {
      font-size: 3vw;
    }
    div:nth-of-type(2) {
      a {
        p {
          font-size: 2.5vw;
        }
      }
    }
  }
`

export { Wrapper }
