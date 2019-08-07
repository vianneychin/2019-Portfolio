import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  .Profile-Image {
    background-color: ${props => props.theme.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 135px;
    width: 135px;
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
      height: 35%;
      font-weight: 500;
      font-size: 25px;
      line-height: 70px;
      @media (max-width: 1215px) {
        font-size: 20px;
      }
    }
    .Title {
      height: 35%;
      li {
        list-style: none;
        color: ${props => props.theme.secondary};
      }
    }
  }
  @media (max-width: ${props => props.theme.dimensions.mobile}) {
    flex-direction: column;
    .Profile-Image {
      background-color: white;
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
        line-height: 0;
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
