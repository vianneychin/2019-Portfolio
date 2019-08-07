import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  padding-top: 5%;
  padding-bottom: 5%;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      text-align: center;
      font-weight: 400;
      font-size: 20px;
    }
    > hr {
      margin-top: 1%;
      margin-bottom: 1%;
      width: 15%;
      /* Change the border color of this later */
    }
    > span {
      padding-left: 5px;
      padding-right: 5px;
      color: ${props => props.theme.secondary};
    }
    .Development-Skills {
      .Development-Content {
        display: flex;
        flex-direction: row;
      }
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
