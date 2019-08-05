import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import GlobalStyle from './GlobalStyle'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.querySelector('#root')
)
