import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import GlobalStyle from './GlobalStyle'
import Theme from './Theme'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Theme>
      <App />
    </Theme>
  </React.Fragment>,
  document.querySelector('#root')
)
