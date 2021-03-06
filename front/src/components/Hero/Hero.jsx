import React, { useState, useEffect } from 'react'

import Container from '../Container/Container.jsx'
import Countdown from '../Countdown/Countdown.jsx'
import NewsletterToggler from '../NewsletterToggler/NewsletterToggler.jsx'

import {
    theme
} from '../../constants'

import {
    StyledLogo,
    StyledLogoDesc,
    StyledLogoWrapper,
    StyledBgColor,
    StyledBgImage,
    StyledDesc,
    StyledHeading,
    StyledHero,
    StyledHeroContent,
    StyledHeroContentWrapper,
    // StyledUl,
    StyledRow
} from './HeroStyles'

import StyledStrong from '../StyledStrong/StyledStrong.jsx'
import BtnLink from '../BtnLink/BtnLink.jsx'

import logo from '../../../static/logo.svg'
import bg_hero from '../../../static/bg_hero.svg'
import bg_hero_2 from '../../../static/bg_hero_2.svg'

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

const Hero = () => {
    const [clientX, setClientX] = useState(0)
    const [clientY, setClientY] = useState(0)
    const [isDue, setIsDue] = useState(false)

    const deadline = '2020/11/14 11:00:00'
    const dateEnd = Date.parse(deadline)

    const [remaining, setRemaining] = useState(`-- dni, -- godzin, -- minut i -- sekund`)
    useEffect(() => {
        const interval = setInterval(() => {
            const {
                days,
                hours,
                minutes,
                seconds
            } = getTimeRemaining(deadline)
            setRemaining(`${days} dni, ${hours} godzin, ${minutes} minut i ${seconds} sekund`)
            const dateNow = Date.parse(new Date())
            if (dateNow > dateEnd) {
                setIsDue(true)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [remaining])

    return (
        <StyledHero onMouseMove={e => {
            setClientY(e.clientY)
            setClientX(e.clientX)
        }}>
            <Container height="100%" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <StyledHeroContent>
                    <StyledHeroContentWrapper>
                        <StyledLogoWrapper href="/">
                            <StyledLogo src={logo} alt="Logo" />
                            <StyledLogoDesc>Korki z <StyledStrong>Front-endu</StyledStrong></StyledLogoDesc>
                        </StyledLogoWrapper>
                        <StyledHeading>
                            Naucz się
                            <br />
                            <StyledStrong isStaticHeight={true}>tworzyć strony internetowe</StyledStrong>
                            <br />
                            z doświadczonym mentorem
                        </StyledHeading>
                        <StyledDesc>
                            <p>
                                <strong>Korki z Front-endu</strong> to zupełnie nowy program nauki tworzenia stron internetowych, w którym przyswajasz tylko tę wiedzę, która jak najszybciej pozwoli Ci zacząć pracę w IT, na stanowisku <strong>Junior Front-end Developer</strong>.
                            </p>
                            {isDue ? (
                                <>
                                    <p>
                                        Zapisy już czynne! Zarejestruj się już teraz!
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        Do otwarcia zapisów pozostał(y) <Countdown remaining={remaining} />.
                                    </p>
                                    <p>
                                        <strong>Zapisz się do newslettera</strong> by otrzymywać informacje na bieżąco.
                                    </p>
                                    <p>
                                        Albo zajrzyj na stronę <strong>rejestracji</strong>, może już czynne!
                                    </p>
                                </>
                            )}
                        </StyledDesc>
                        <StyledRow>
                            <NewsletterToggler>
                                Chcę dołączyć do newslettera!
                            </NewsletterToggler>
                            <BtnLink href="/register">
                                Rejestracja!
                            </BtnLink>
                        </StyledRow>
                    </StyledHeroContentWrapper>
                </StyledHeroContent>
                <StyledBgColor top={theme.s(12 + (clientY * 0.003))} right={theme.s(10 - (clientX * 0.001))} dimensions="10vw" bg={theme.colorOrange} />
                <StyledBgImage src={bg_hero} alt="" top={theme.s(16 + (clientY * 0.006))} right={theme.s(6 - (clientX * 0.002))} mw="38vw" mwDesktop="30vw" />
                <StyledBgImage src={bg_hero_2} alt="" top={theme.s(36 + (clientY * 0.009))} right={theme.s(10 - (clientX * 0.003))} mw="18vw" mwDesktop="12vw" />
                <StyledBgColor rounded={true} top={theme.s(36 + (clientY * 0.003))} right={theme.s(2 - (clientX * 0.001))} dimensions="25vw" />
            </Container>
        </StyledHero>
    )
}

export default Hero
