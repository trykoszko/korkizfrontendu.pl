import React, { useState } from 'react'
import styled from 'styled-components'

import Container from './Container'
import NewsletterForm from './NewsletterForm'

import {
    theme
} from '../constants'

import {
    above,
    under
} from '../helpers/breakpoints'

import bg_hero from '../../static/bg_hero.svg'
import bg_hero_2 from '../../static/bg_hero_2.svg'

const StyledHero = styled.div`
    width: 100%;
    height: 100%;

    color: ${theme.colorDefault};

    overflow: hidden;

    @media ${above.tablet} {
        padding-top: ${theme.s(4)};
        padding-bottom: ${theme.s(4)};
    }
`

const StyledHeroContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 10;
`

const StyledHeroContentWrapper = styled.div`
    width: 100%;

    @media ${above.tablet} {
        margin-top: ${theme.s(9)};
    }
    @media ${under.smDesktop} {
        max-width: 90%;
    }
    @media ${above.smDesktop} {
        max-width: 50%;
    }
    @media ${above.desktop} {
        max-width: 60%;
    }
`

const StyledHeading = styled.h1`
    font-size: 1.6em;
    font-weight: 400;

    line-height: 1.4;

    margin: 0;
    margin-bottom: ${theme.s(2)};

    color: ${theme.colorPrimary};

    @media ${above.tablet} {
        font-size: 2.1em;
        margin-bottom: ${theme.s(4)};
    }
`

const StyledDesc = styled.div`
    font-size: 1rem;
    line-height: 1.8;

    margin: 0;
    margin-bottom: ${theme.s(2)};

    max-width: 100%;

    p {
        margin-bottom: .7rem;
    }

    @media ${above.tablet} {
        margin-bottom: ${theme.s(4)};
    }
    @media ${above.desktop} {
        max-width: 90%;

        font-size: .85rem;
    }
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

    @media ${under.smDesktop} {
        display: none;
    }
    @media ${above.desktop} {
        ${props => props.mwDesktop ? `max-width: ${props.mwDesktop}; height: auto;` : ''}
    }
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

    @media ${under.smDesktop} {
        display: none;
    }
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

const StyledUl = styled.ul`
    line-height: 1.3;
    margin-bottom: ${theme.s(2)};

    li {
        margin-bottom: ${theme.s()};
    }

    @media ${above.tablet} {
        margin-bottom: ${theme.s(3)};

        li {
            margin-bottom: ${theme.s(1.5)};
        }
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
                            <p>
                                Przygotowuję specjalnie dla Ciebie nowy program nauki tworzenia stron internetowych: <strong>#korkizfrontendu</strong>
                            </p>
                            <p>
                                <strong>Czy program będzie idealny dla Ciebie? Tak, jeżeli:</strong>
                            </p>
                            <StyledUl>
                                <li>chciałbyś się przebranżowić i zacząć pracę w IT</li>
                                <li>chciałbyś nauczyć się tworzyć strony internetowe i na tym zarabiać</li>
                                <li>jesteś już na pewnym poziomie umiejętności front-endowych, ale nie wiesz co dalej</li>
                                <li>chcesz uczestniczyć w indywidualnych lub grupowych zajęciach z programowania i tworzenia stron internetowych</li>
                                <li>potrzebujesz mentora lub porady, w którym kierunku podążać</li>
                            </StyledUl>
                            <p>
                                <strong>Dlaczego nowy program #korkizfrontendu jest taki dobry?</strong>
                            </p>
                            <StyledUl>
                                <li>zaczynałem tak samo jak Ty i wiem od czego zacząć a także w jakim kierunku najlepiej kontynuować naukę</li>
                                <li>w programie grupowym masz stały kontakt z grupą i osobą prowadzącą</li>
                                <li>moja wiedza opiera się o realne projekty</li>
                                <li>każdy jest traktowany indywidualnie i progres sprawdzany jest na bieżąco</li>
                            </StyledUl>
                            <p>
                                Jeżeli nowe <strong>Korki z Front-endu</strong> brzmią interesująco - zapisz się do newslettera poniżej. Już wkrótce wyślę Ci informacje o programie.
                            </p>
                        </StyledDesc>
                        <NewsletterForm />
                    </StyledHeroContentWrapper>
                </StyledHeroContent>
                <StyledBgColor top={theme.s(17 + (clientY * 0.003))} right={theme.s(20 - (clientX * 0.001))} dimensions="10vw" bg={theme.colorOrange} />
                <StyledBgImage src={bg_hero} alt="" top={theme.s(18 + (clientY * 0.006))} right={theme.s(6 - (clientX * 0.002))} mw="38vw" mwDesktop="30vw" />
                <StyledBgImage src={bg_hero_2} alt="" top={theme.s(42 + (clientY * 0.009))} right={theme.s(10 - (clientX * 0.003))} mw="18vw" mwDesktop="12vw" />
                <StyledBgColor rounded={true} top={theme.s(44 + (clientY * 0.003))} right={theme.s(2 - (clientX * 0.001))} dimensions="25vw" />
            </Container>
        </StyledHero>
    )
}

export default Hero
