import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  darkPink: '#E06C9F',
  lightPink: '#F283B6',
  beige: '#EDBFB7',
  lightGreen: '#B5BFA1',
  darkGreen: '#6E9887',
  shadow:
    '0 5px 10px rgba(154, 160, 185, 0.5), 0 15px 40px rgba(166, 173, 201, 0.2)',
  dimensions: {
    mobile: '450px'
  },
  secondary: 'rgba(0,0,0,0.8)'
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
