import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 1480px) {
    margin-right: 10%;
  }
  .Profile-Image {
    background-color: ${props => props.theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 130px;
    border-radius: 125px;
    margin: 5%;
    > img {
      height: 125px;
      width: 125px;
      border-radius: 125px;
    }
  }
  .Text-Container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9%;
    .Name {
      font-weight: 500;
      font-size: 25px;
      line-height: 70px;
      @media (max-width: 1215px) {
        font-size: 20px;
      }
    }
    .Title {
      li {
        list-style: none;
        color: ${props => props.theme.secondary};
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    flex-direction: column;
    padding-top: 10%;
    .Profile-Image {
      background-color: rgba(0, 0, 0, 0);
      > img {
        height: 90px;
        width: 90px;
        margin-top: 5%;
      }
    }
    .Text-Container {
      margin-bottom: 5%;
      .Name {
        font-size: 18px;
      }
      .Title {
        li {
          font-size: 12px;
        }
      }
    }
  }
`

export { Wrapper }
