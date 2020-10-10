import React from 'react'
import Container from './Container'
import styled from 'styled-components'

import {
    theme,
    menuItems
} from '../constants'

import logo from '../../static/logo.svg'

const StyledNavbarWrapper = styled.header`
    width: 100%;
    height: auto;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 900;
`

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0;
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
    max-width: 48px;
    height: auto;

    margin: 0;
    margin-right: ${theme.s(2)};
`

const StyledLogoDesc = styled.p`
    margin: 0;
`

const StyledNav = styled.ul`
    list-style: none;
    padding: 0;

    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
        display: block;
        margin: 0;
        padding: ${theme.s()} ${theme.s(2)};
    }
`

const Navbar = () => {
    return (
        <StyledNavbarWrapper>
            <Container>
                <StyledNavbar>
                    <StyledLogoWrapper href="/">
                        <StyledLogo src={logo} alt="Logo" />
                        <StyledLogoDesc>Korki z Front-endu</StyledLogoDesc>
                    </StyledLogoWrapper>
                    <StyledNav>
                        {menuItems ? menuItems.map(item => <li key={item.id}><a href={item.url}>{item.title}</a></li>) : ''}
                    </StyledNav>
                </StyledNavbar>
            </Container>
        </StyledNavbarWrapper>
    )
}

export default Navbar
