import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    white-space: nowrap;
    line-height: 22px;
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
