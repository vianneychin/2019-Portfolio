import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import GlobalStyle from './GlobalStyle'
import Theme from './Theme'

ReactDOM.render(
  <Theme>
    <>
      <GlobalStyle />
      <App />
    </>
  </Theme>,
  document.querySelector('#root')
)
