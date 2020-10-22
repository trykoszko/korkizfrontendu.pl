import React, { useState } from 'react'
import Container from './Container'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
    theme,
    menuItems
} from '../constants'

import {
    above,
    under
} from '../helpers/breakpoints'

import logo from '../../static/logo.svg'

const StyledNavbarWrapper = styled.header`
    width: 100%;
    height: auto;

    z-index: 900;

    ${theme.transitions.quick}

    background-color: ${theme.colorBeige};

    ${props => props.windowScrolled ? `box-shadow: ${theme.boxShadow.small};` : ''}

    @media ${above.tablet} {
        position: fixed;
        top: 0;
        left: 0;
    }
`

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0;

    @media ${above.tablet} {
        flex-direction: row;
    }
`

const StyledLogoWrapper = styled.a`
    margin: ${theme.s()} 0;

    font-family: ${theme.monoFont};
    color: ${theme.colorPrimary};

    display: flex;
    flex-direction: row;
    align-items: center;

    ${theme.transitions.ease}

    &:hover {
        transform: translateY(-3px);
    }
`

const StyledLogo = styled.img`
    max-width: ${props => props.windowScrolled ? 48 : 64}px;
    height: auto;

    ${theme.transitions.ease}

    margin: 0;
    margin-right: ${theme.s(2)};

    @media ${under.tablet} {
        max-width: ${props => props.windowScrolled ? 48 : 80}px;
    }
`

const StyledLogoDesc = styled.p`
    margin: 0;

    font-size: ${props => props.windowScrolled ? 1 : 1.35}rem;

    ${theme.transitions.ease}

    display: flex;
    flex-direction: column;

    span:nth-child(2) {
        position: relative;

        &:after {
            content: '';

            width: 100%;
            height: 30%;

            background-color: ${theme.colorOrange};

            position: absolute;
            bottom: 5%;
            left: 0;

            z-index: -1;
        }
    }

    @media ${under.tablet} {
        font-size: ${props => props.windowScrolled ? 1 : 1.8}rem;
    }
`

const StyledNav = styled.ul`
    list-style: none;
    padding: 0;

    margin: ${theme.s()} 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-family: ${theme.monoFont};

    li {
        display: block;
        margin: 0 ${theme.s(2)};
        padding: ${theme.s()} 0;

        &:last-child {
            margin-right: 0;
        }
    }
`

const StyledMenuItem = styled.li`
    ${props => props.isCurrent ? `
        a {
            position: relative;
            text-decoration: none;

            &:after {
                content: '';

                width: 100%;
                height: 30%;

                background-color: ${theme.colorOrange};

                position: absolute;
                bottom: 5%;
                left: 0;

                z-index: -1;

                opacity: .4;
            }
            &:hover {
                &:after {
                    opacity: 1;
                }
            }
        }
    ` : ``}
`

const StyledCountdown = styled.p`
    margin: ${theme.s(2)} 0;

    font-size: .8rem;

    text-align: center;

    span {
        color: white;
        background-color: ${theme.colorOrange};
        padding: 4px;

        display: block;
        margin-bottom: ${theme.s(-1)};
    }

    @media ${above.desktop} {
        margin: 0;

        font-size: .7rem;
    }
`

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

const Countdown = ({ remaining }) => {
    return <StyledCountdown><span>{remaining}</span><br />pozostało do kolejnej edycji Korków!</StyledCountdown>
}

const Navbar = ({ currentSectionColor, windowScrolled, currentPath }) => {
    const [remaining, setRemaining] = useState(`-- dni, -- godzin, -- minut i -- sekund`)
    const deadline = '2020-11-06'
    setInterval(() => {
        const {
            days,
            hours,
            minutes,
            seconds
        } = getTimeRemaining(deadline)
        setRemaining(`${days} dni, ${hours} godzin, ${minutes} minut i ${seconds} sekund`)
    }, 1000)

    const MenuItem = ({ id, url, title }) => {
        return (
            <StyledMenuItem isCurrent={url === currentPath || url + '/' === currentPath} key={id}>
                <Link to={url}>
                    <span>{title}</span>
                </Link>
            </StyledMenuItem>
        )
    }

    return (
        <StyledNavbarWrapper currentSectionColor={currentSectionColor} windowScrolled={windowScrolled}>
            <Container>
                <StyledNavbar>
                    <StyledLogoWrapper href="/">
                        <StyledLogo windowScrolled={windowScrolled} src={logo} alt="Logo" />
                        <StyledLogoDesc windowScrolled={windowScrolled}><span>Korki z</span> <span>Front-endu</span></StyledLogoDesc>
                    </StyledLogoWrapper>
                    <Countdown remaining={remaining} />
                    <StyledNav>
                        {menuItems ? menuItems.map(item => <MenuItem key={item.id} id={item.id} isCurrent={item.isCurrent} url={item.url} title={item.title} />) : ''}
                    </StyledNav>
                </StyledNavbar>
            </Container>
        </StyledNavbarWrapper>
    )
}

export default Navbar
