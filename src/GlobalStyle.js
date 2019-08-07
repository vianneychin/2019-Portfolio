import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
    font-size: 14px;
    font-family: Poppins;
    white-space: nowrap;
  }
  a:visited {
    color: black;
  }
  a {
    color: black;
    text-decoration: none;
  }
`

export default GlobalStyle
