import React from "react"
import Typography from 'typography'

import GlobalContextProvider from '../context/GlobalContextProvider'

import { typographyTheme } from '../constants'

import HelmetWrapper from '../components/HelmetWrapper'
import GlobalStyle from '../components/GlobalStyle'
import Footer from '../components/Footer/Footer.jsx'
import NewsletterModal from '../components/NewsletterModal/NewsletterModal.jsx'

const typography = new Typography(typographyTheme)
typography.injectStyles()

export default function Layout({ newsletterModalContext, currentPath, children }) {
    return (
        <GlobalContextProvider>
            <GlobalStyle />
            <HelmetWrapper />
            <NewsletterModal newsletterModalContext={newsletterModalContext} />
            {children}
            <Footer currentPath={currentPath} />
        </GlobalContextProvider>
    )
}
