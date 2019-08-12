import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  padding: 5%;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 1480px) {
    margin-right: 10%;
  }
  .Development-Skills {
    > h1 {
      > span {
        > svg {
          height: 28px;
          position: absolute;
        }
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      text-align: center;
      font-weight: 300;
      font-size: 20px;
    }
    > hr {
      margin-top: 1%;
      margin-bottom: 1%;
      width: 6.5%;
    }
    > span {
      padding-left: 8px;
      padding-right: 8px;
      color: ${props => props.theme.secondary};
    }
    .Frontend-Skills {
      flex: 3;
      .Frontend-Content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    .Backend-Skills {
      .Backend-Content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`

export { Wrapper }
