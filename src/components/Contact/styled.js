import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5%;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
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
    flex-direction: column;
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
        > p {
          font-weight: 500;
          color: ${props => props.theme.secondary};
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
