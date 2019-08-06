import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  darkPink: '#E06C9F',
  lightPink: '#F283B6',
  beige: '#EDBFB7',
  lightGreen: '#B5BFA1',
  darkGreen: '#6E9887',
  dimensions: {
    mobile: '450px'
  }
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
