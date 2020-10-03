import React from 'react'
import { useTheme } from '../../themeContext'
import { Path } from 'react-native-svg'

export const SmileOpen = () => {
  const { colors } = useTheme()

  return (
    <>
      <Path d="M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z" fill={colors.outline} />
      <Path
        d="M495,643c-16.95-1-31.73,6.75-36.65,18.22a56.86,56.86,0,0,0,65.14,12.53A55.39,55.39,0,0,0,530,670.2C529.08,656.09,514.06,644.18,495,643Z"
        fill={colors.tongue}
      />
      <Path
        d="M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="6px"
      />
      <Path
        d="M478.12,632.46c.45-.11.63-.16.92-.21l.75-.14c.49-.09,1-.14,1.46-.18a21.54,21.54,0,0,1,2.89-.1,25,25,0,0,1,5.79.81,21.4,21.4,0,0,1,10.35,6.1,20.18,20.18,0,0,1,5.08,10.16A17.27,17.27,0,0,1,504,659.25c-2.07-2.93-3.66-5.56-5.32-7.76a28.41,28.41,0,0,0-2.45-3,14.06,14.06,0,0,0-2.7-2.16,15.48,15.48,0,0,0-6.11-2.09A29.5,29.5,0,0,0,484,644c-.59,0-1.18,0-1.76.05l-.85.06-.39,0c-.1,0-.3,0-.23,0Z"
        fill={colors.outline}
      />
    </>
  )
}
