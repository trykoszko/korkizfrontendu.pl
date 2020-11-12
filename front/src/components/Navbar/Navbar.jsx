import React from 'react'

import {
    menuItems
} from '../../constants'

import {
    StyledNav,
    StyledNavbar,
    StyledNavbarWrapper
} from './NavbarStyles'

import {
    StyledLogo,
    StyledLogoDesc,
    StyledLogoWrapper
} from '../Hero/HeroStyles'

import Container from '../Container/Container.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'

import logo from '../../../static/logo.svg'

const Navbar = ({ currentPath, bg }) => {
    return (
        <StyledNavbarWrapper bg={bg}>
            <Container>
                <StyledNavbar>
                    <StyledLogoWrapper href="/">
                        <StyledLogo src={logo} alt="Logo" />
                        <StyledLogoDesc><span>Korki z</span> <span>Front-endu</span></StyledLogoDesc>
                    </StyledLogoWrapper>
                    <StyledNav>
                        {menuItems ? menuItems.map(item => <MenuItem key={item.id} currentPath={currentPath} id={item.id} isCurrent={item.isCurrent} isSpecial={item.isSpecial} url={item.url} title={item.title} />) : ''}
                    </StyledNav>
                </StyledNavbar>
            </Container>
        </StyledNavbarWrapper>
    )
}

export default Navbar
