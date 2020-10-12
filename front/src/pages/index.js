import React from "react"

import { theme } from '../constants'

import Layout from '../components/Layout'
import FullHeightSection from '../components/FullHeightSection'
import Hero from '../components/Hero'

export default function Home({ path }) {
  return (
    <>
      <Layout>
        <FullHeightSection bg={theme.colorBeige}>
          <Hero />
        </FullHeightSection>
      </Layout>
    </>
  )
}
