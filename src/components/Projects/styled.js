import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1%;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  height: 101%;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.05), white); */
  .Title {
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 200%;
      font-weight: 500;
    }
  }
  .Projects-Container {
    > div {
      height: 100%;
    }
  }
`

export { Wrapper }
