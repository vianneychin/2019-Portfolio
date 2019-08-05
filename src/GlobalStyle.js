import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family: Poppins;
    padding: 15px;
  }
`

export default GlobalStyle
