import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  dark: {
    bg: 'black'
  },
  light: {
    bg: 'darkgrey'
  }
}

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
