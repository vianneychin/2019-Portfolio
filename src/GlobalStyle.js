import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.beige};
    font-size: 14px;
    font-family: Poppins;
  }
`

export default GlobalStyle
