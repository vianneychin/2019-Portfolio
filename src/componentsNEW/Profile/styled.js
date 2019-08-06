import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
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
}
    .Name {
      height: 35%;
      font-weight: 500;
      font-size: 25px;
      line-height: 70px;
    }
    .Title {
      height: 35%;
      li {
        list-style: none;
      }
    }
  }
`

export { Wrapper }
