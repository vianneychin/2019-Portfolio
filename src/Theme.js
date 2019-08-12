import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  beige: '#EDBFB7',
  shadow:
    '0 5px 10px rgba(154, 160, 185, 0.5), 0 15px 40px rgba(166, 173, 201, 0.2)',
  dimensions: {
    mobile: '550px'
  },
  secondary: 'rgba(0,0,0,0.8)',
  offWhite: 'rgba(255, 255, 255, 0.5)',
  gradient: 'linear-gradient(rgba(0, 0, 0, 0.05), white)'
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
