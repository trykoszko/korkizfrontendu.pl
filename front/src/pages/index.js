import React, { useEffect, useState } from "react"
import Typography from 'typography'
// import * as Scroll from 'react-scroll'
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { typographyTheme, theme } from '../constants'

import HelmetWrapper from '../components/HelmetWrapper'
import GlobalStyle from '../components/GlobalStyle'
import FullHeightSectionWrapper from '../components/FullHeightSectionWrapper'
import FullHeightSection from '../components/FullHeightSection'
import OneThirdSection from '../components/OneThirdSection'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const typography = new Typography(typographyTheme)
typography.injectStyles()

export default function Home({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(window.scrollY)
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <>
      <GlobalStyle />
      <HelmetWrapper />
      <Navbar currentPath={path} windowScrolled={scrolled} />
      <FullHeightSectionWrapper>
        <FullHeightSection bg={theme.colorBeige}>
          <Hero />
        </FullHeightSection>
        <OneThirdSection bg="white">
          <Footer currentPath={path} />
        </OneThirdSection>
      </FullHeightSectionWrapper>
    </>
  )
}
