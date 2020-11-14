import React, { useState, useEffect } from "react"
import queryString from 'query-string'

import {
  theme
} from '../constants'

import AutoHeightSection from '../components/AutoHeightSection/AutoHeightSection.jsx'
import Container from '../components/Container/Container.jsx'
import ContentContainer from '../components/ContentContainer/ContentContainer.jsx'
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Layout from '../components/Layout'
import Countdown from '../components/Countdown/Countdown.jsx'

const getTimeRemaining = endtime => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );
  return {
      total,
      days,
      hours,
      minutes,
      seconds
  };
}

export default function Regulamin({ path }) {
  const [isDue, setIsDue] = useState(false)
  const [remaining, setRemaining] = useState(`-- dni, -- godzin, -- minut i -- sekund`)
  const [isDev, setIsDev] = useState(false)

  useEffect(() => {
    const qs = queryString.parse(window.location.search)
    if ('_allowDev' in qs) {
      if (qs._allowDev === 'yes') {
        setIsDev(true)
      }
    }
  }, [])

  const deadline = '2020/11/14 11:00:00'
  const dateEnd = Date.parse(deadline)
  setInterval(() => {
    const dateNow = Date.parse(new Date())
    if (dateNow > dateEnd) {
      setIsDue(true)
    }
  }, 1000)
  useEffect(() => {
      const interval = setInterval(() => {
          const {
              days,
              hours,
              minutes,
              seconds
          } = getTimeRemaining(deadline)
          setRemaining(`${days} dni, ${hours} godzin, ${minutes} minut i ${seconds} sekund`)
      }, 1000)
      return () => clearInterval(interval)
  }, [remaining])

  return (
    <Layout currentPath={path}>
      <Navbar bg={theme.colorBeige} />
      <AutoHeightSection bg={theme.colorBeige}>
        <Container narrow={true} pt="12" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
          <ContentContainer>
            <h1>Rejestracja</h1>
            {isDue ? <p>
              Użyj poniższego formularza by założyć swoje konto na korkach.
              <br />
              Po założeniu konta będziesz mógł zarządzać swoją subskrypcją.
            </p> : ''}
          </ContentContainer>
        </Container>
      </AutoHeightSection>
      {isDev || isDue ? <RegisterForm /> : (
        <AutoHeightSection bg={theme.colorBeigeAlt}>
          <Container narrow={true} ptMobile="4" pt="4" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
            <ContentContainer>
              <p>
                Rejestracja nie jest jeszcze czynna.
                <br />
                Poczekaj jeszcze <Countdown remaining={remaining} />.
              </p>
            </ContentContainer>
          </Container>
        </AutoHeightSection>
      )}
    </Layout>
  )
}
