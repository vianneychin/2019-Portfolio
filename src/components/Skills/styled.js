import styled from 'styled-components'

const Wrapper = styled.div`
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3%;
    > h1 {
      text-align: center;
      font-weight: 400;
      font-size: 20px;
    }
    > hr {
      width: 15%;
      margin-bottom: 2%;
      /* Change the border color of this later */
    }
    > span {
      padding-left: 5px;
      padding-right: 5px;
    }
    .Development-Skills {
      .Development-Content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
