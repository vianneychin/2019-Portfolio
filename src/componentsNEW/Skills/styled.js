import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      font-weight: 400;
      font-size: 20px;
    }
    hr {
      width: 30%;
      margin-top: 1%;
      /* Change the border color of this later */
    }
  }
`

export { Wrapper }
