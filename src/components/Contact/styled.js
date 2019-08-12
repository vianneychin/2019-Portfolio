import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5%;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  margin-left: 5%;
  margin-right: 5%;
  padding: 5%;
  @media (max-width: 1480px) {
    margin-right: 10%;
  }
  p {
    margin-top: 5px;
  }
  hr {
    width: 10%;
    align-self: center;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  > h1 {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    > span {
      > svg {
        height: 28px;
        position: relative;
        top: 9px;
        left: 3px;
      }
    }
  }
  .Contact-Container {
    display: flex;
    flex: 3;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: 400;
      letter-spacing: 0.75px;
      > a {
        width: 70%;
        display: flex;
        align-items: center;
        > p {
          color: ${props => props.theme.secondary};
        }
        > span {
          font-size: 20px;
          margin-right: 10%;
          height: 100%;
          width: 15px;
          position: relative;
          top: 8px;
          @media (max-width: ${props => props.theme.dimensions.mobile}) {
            margin-right: 8px;
          }
          }
        }
      }
    }
  }
  .Social-Container {
    display: flex;
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
          height: 20px;
          width: 20px;
          margin-top: 10px;
        }
        > p {
          font-size: 14px;
          font-weight: 500;
          color: ${props => props.theme.secondary};
        }
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    padding-top: 10%;
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
