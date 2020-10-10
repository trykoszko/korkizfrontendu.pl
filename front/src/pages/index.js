import React, { useState, useEffect } from "react"
import Typography from 'typography'
import { typographyTheme } from '../constants'

import GlobalStyle from '../components/GlobalStyle'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const typography = new Typography(typographyTheme)
typography.injectStyles()

export default function Home() {
  useEffect(() => {
    console.log('loaded')
  })

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  )
}
