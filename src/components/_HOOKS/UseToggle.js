import React, { useState } from 'react'

const theme = {
  background: {
    darkBlue: 'rgb(17, 23, 25)',
    babyPink: 'rgb(244, 194, 194',
  },
  fontColor: {
    black: '#000',
    white: '#FFF'
  }
}

function UseToggle() {
  const [toggle, setToggle] = useState(false)
  const [textColor, setTextColor] = useState(theme.fontColor.white)
  const [background, setBackground] = useState(theme.background.darkBlue)
  const [modeText, setModeText] = useState('Light Mode')
  const renderLightOrDarkMode = (props) => {
    if (!toggle) {
      setToggle(() => true)
      setBackground(() => theme.background.babyPink)
      setTextColor(() => theme.fontColor.black)
      setModeText(() => 'Dark Mode')
    }
    if (toggle) {
      setToggle(() => false)
      setBackground(() => theme.background.darkBlue)
      setTextColor(() => theme.fontColor.white)
      setModeText(() => 'Light Mode')
    }
  }
  return {
    toggle,
    textColor,
    background,
    renderLightOrDarkMode,
    modeText
  }
}

export default UseToggle