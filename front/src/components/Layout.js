import React, { useState, useEffect } from "react"
import Typography from 'typography'

import { typographyTheme } from '../constants'

import HelmetWrapper from '../components/HelmetWrapper'
import GlobalStyle from '../components/GlobalStyle'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const path = require('path')

const typography = new Typography(typographyTheme)
typography.injectStyles()

export default function Layout({ children }) {
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
            {children}
            <Footer currentPath={path} />
        </>
    )
}
