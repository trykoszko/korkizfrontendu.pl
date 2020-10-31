import React from "react"
import { Router } from "@reach/router"

import Regulamin from './regulamin'
import Home from './home'

export default function index({ path }) {
  const NewsletterModalContext = React.createContext({ isModalOpen: false })

  return (
    <>
      <Router basepath="/">
        <Home navigate="1" path="/" newsletterModalContext={NewsletterModalContext} />
        <Regulamin navigate="2" path="/regulamin" newsletterModalContext={NewsletterModalContext} />
      </Router>
    </>
  )
}
