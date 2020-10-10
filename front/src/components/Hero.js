import React, { useState } from 'react'
import styled from 'styled-components'

import Container from './Container'
import NewsletterForm from './NewsletterForm'

import {
    theme
} from '../constants'

import {
    above
} from '../helpers/breakpoints'

import bg_hero from '../../static/bg_hero.svg'
import bg_hero_2 from '../../static/bg_hero_2.svg'

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;

    background-color: ${theme.colorBeige};
    color: ${theme.colorDefault};

    overflow: hidden;
`

const StyledHeroContent = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 10;
`

const StyledHeroContentWrapper = styled.div`
    width: 100%;

    @media ${above.desktop} {
        max-width: 50%;

        margin-top: ${theme.s(9)};
    }
`

const StyledHeading = styled.h1`
    font-size: 2.4em;
    font-weight: 400;

    line-height: 1.5;

    margin: 0;
    margin-bottom: ${theme.s(2)};

    color: ${theme.colorPrimary};
`

const StyledDesc = styled.p`
    line-height: 2.5;

    margin: 0;
    margin-bottom: ${theme.s(6)};

    max-width: 100%;
`

const StyledBgImage = styled.img.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right
    }
}))`
    position: absolute;

    ${props => props.mw ? `max-width: ${props.mw}; height: auto;` : ''}

    z-index: 9;
`

const StyledBgColor = styled.div.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right
    }
}))`
    display: block;

    position: absolute;

    ${props => props.mw ? `max-width: ${props.mw}; height: auto;` : ''}

    background-color: ${props => props.bg ? props.bg : 'rgba(255, 255, 255, .7)'};

    width: ${props => props.dimensions};
    height: ${props => props.dimensions};

    ${props => props.rounded ? `border-radius: 100%;` : ''}
`

const StyledStrong = styled.strong`
    position: relative;

    ::before {
        content: '';

        position: absolute;
        bottom: 5px;
        left: 0;

        width: 100%;
        height: 30%;

        z-index: -1;

        background-color: ${theme.colorOrange};

        animation-duration: 1.5s;
        animation-name: titleBg;
        animation-timing-function: ease-in-out;
    }
`

const Hero = () => {
    const [clientX, setClientX] = useState(0)
    const [clientY, setClientY] = useState(0)

    return (
        <StyledHero onMouseMove={e => {
            setClientY(e.clientY)
            setClientX(e.clientX)
        }}>
            <Container height="100%" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <StyledHeroContent>
                    <StyledHeroContentWrapper>
                        <StyledHeading>
                            Naucz się
                            <br />
                            <StyledStrong>tworzyć strony internetowe</StyledStrong>
                            <br />
                            z doświadczonym mentorem
                        </StyledHeading>
                        <StyledDesc>
                            Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly. We respect our customer opinions and deals with them with perfect wireframing.
                        </StyledDesc>
                        <NewsletterForm />
                    </StyledHeroContentWrapper>
                </StyledHeroContent>
                <StyledBgColor bottom={theme.s(60 - (clientY * 0.003))} right={theme.s(20 - (clientX * 0.003))} dimensions="10vw" bg={theme.colorOrange} />
                <StyledBgImage src={bg_hero} alt="" bottom={theme.s(22 - (clientY * 0.006))} right={theme.s(6 - (clientX * 0.006))} mw="38vw" />
                <StyledBgImage src={bg_hero_2} alt="" bottom={theme.s(12 - (clientY * 0.009))} right={theme.s(10 - (clientX * 0.009))} mw="18vw" />
                <StyledBgColor rounded={true} bottom={theme.s(12 - (clientY * 0.003))} right={theme.s(2 - (clientX * 0.003))} dimensions="25vw" />
            </Container>
        </StyledHero>
    )
}

export default Hero
