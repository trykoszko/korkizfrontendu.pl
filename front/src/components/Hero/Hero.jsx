import React, { useState, useEffect, useContext } from 'react'

import {
    GlobalDispatchContext
} from '../../context/GlobalContextProvider'

import Container from '../Container/Container.jsx'
import Countdown from '../Countdown/Countdown.jsx'

import { StyledNewsletterToggler } from '../NewsletterToggler/NewsletterTogglerStyles'

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
    StyledStrong,
    // StyledUl
} from './HeroStyles'

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

    const dispatch = useContext(GlobalDispatchContext)

    const [remaining, setRemaining] = useState(`-- dni, -- godzin, -- minut i -- sekund`)
    const deadline = '2020-11-20'
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
        <StyledHero onMouseMove={e => {
            setClientY(e.clientY)
            setClientX(e.clientX)
        }}>
            <Container height="100%" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <StyledHeroContent>
                    <StyledHeroContentWrapper>
                        <StyledLogoWrapper href="/">
                            <StyledLogo src={logo} alt="Logo" />
                            <StyledLogoDesc><span>Korki z</span> <span>Front-endu</span></StyledLogoDesc>
                        </StyledLogoWrapper>
                        <StyledHeading>
                            Naucz się
                            <br />
                            <StyledStrong>tworzyć strony internetowe</StyledStrong>
                            <br />
                            z doświadczonym mentorem
                        </StyledHeading>
                        <StyledDesc>
                            <p>
                                <strong>Korki z Front-endu</strong> to zupełnie nowy program nauki tworzenia stron internetowych, w którym przyswajasz tylko tę wiedzę, która jak najszybciej pozwoli Ci zacząć pracę w IT, na stanowisku <strong>Junior Front-end Developer</strong>.
                            </p>
                            <p>
                                Do nowej edycji #korków pozostało <strong><Countdown remaining={remaining} /></strong>.
                            </p>
                            <p>
                                Zapisz się do newslettera poniżej by otrzymywać informacje na bieżąco.
                            </p>
                        </StyledDesc>
                        <StyledNewsletterToggler onClick={() => {
                            dispatch({ type: 'TOGGLE_NEWSLETTER_MODAL' })
                        }}>
                            Toggle newsletter
                        </StyledNewsletterToggler>
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
