import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2.5%;
  .Title {
    height: 106px;
    background-color: red;
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
