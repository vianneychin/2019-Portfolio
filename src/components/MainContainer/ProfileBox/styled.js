import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => props.theme.lightGreen};
  height: 200px;
  width: 500px;
  display: flex;
  border-radius: 4px;
  position: fixed;
  .ProfileImage {
    background-color: ${props => props.theme.darkGreen};
    height: 135px;
    width: 135px;
    border-radius: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    > img {
      height: 125px;
      width: 125px;
    }
  }
  > div {
    display: flex;
    align-items: center;
    margin-left: 40px;
    > div {
      height: 100%;
      flex-direction: column;
      display: flex;
      justify-content: center;
      .Name {
        height: 35%;
        font-weight: 500;
        padding-bottom: 20px;
        padding-top: 20px;
        font-size: 25px;
        color: black;
      }
      .Title {
        height: 35%;
        padding-left: 20px;
        li {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          list-style: none;
        }
      }
    }
  }
`

export { Wrapper }
