import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: darkgray;
  height: 200px;
  width: 35%;
  display: flex;
  align-items: center;
  > img {
    height: 125px;
    width: 125px;
  }
  > h1 {
    font-weight: 400;
  }
`

export { Wrapper }
