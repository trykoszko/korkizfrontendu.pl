import React from 'react'

import {
    menuItems
} from '../../constants'

import {
    StyledLogo,
    StyledLogoDesc,
    StyledLogoWrapper,
    StyledNav,
    StyledNavbar,
    StyledNavbarWrapper
} from './NavbarStyles'

import Container from './Container'
import MenuItem from './MenuItem.jsx'

import logo from '../../static/logo.svg'

const Navbar = ({ currentSectionColor, windowScrolled, currentPath }) => {
    return (
        <StyledNavbarWrapper currentSectionColor={currentSectionColor} windowScrolled={windowScrolled}>
            <Container>
                <StyledNavbar>
                    <StyledLogoWrapper href="/">
                        <StyledLogo windowScrolled={windowScrolled} src={logo} alt="Logo" />
                        <StyledLogoDesc windowScrolled={windowScrolled}><span>Korki z</span> <span>Front-endu</span></StyledLogoDesc>
                    </StyledLogoWrapper>
                    <StyledNav>
                        {menuItems ? menuItems.map(item => <MenuItem key={item.id} currentPath={currentPath} id={item.id} isCurrent={item.isCurrent} url={item.url} title={item.title} />) : ''}
                    </StyledNav>
                </StyledNavbar>
            </Container>
        </StyledNavbarWrapper>
    )
}

export default Navbar
