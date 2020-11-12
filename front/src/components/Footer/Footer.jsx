import React from 'react'
import { Link } from 'gatsby'

import Container from '../Container/Container.jsx'

import {
    StyledFooter,
    StyledFooterWrapper,
    StyledFooterColumn,
    StyledFooterNav,
    StyledFooterNavItem,
    StyledCopyright
} from './FooterStyles'

import {
    menuItems
} from '../../constants'

const Footer = ({ currentPath }) => {
    const MenuItem = ({ id, url, title, isSpecial }) => {
        return (
            <StyledFooterNavItem isSpecial={isSpecial} isCurrent={url === currentPath || url + '/' === currentPath} key={id}>
                <Link to={url}>
                    <span>{title}</span>
                </Link>
            </StyledFooterNavItem>
        )
    }

    return (
        <StyledFooter>
            <Container narrow={true} flexDirection="column" height="100%" py={8} ptMobile="3">
                <StyledFooterWrapper>
                    <StyledFooterColumn>
                        <h4>Menu</h4>
                        <StyledFooterNav>
                            {menuItems ? menuItems.map(item => <MenuItem key={item.id} {...item} />) : ''}
                        </StyledFooterNav>
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <h4>Kontakt</h4>
                        <StyledFooterNav>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://t2m.io/fotzFSo6">Facebook</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://t2m.io/x01RwXQJ">YouTube</a>
                            </li>
                            <li>
                                <a href="https://t2m.io/v2FaNHR5">Discord</a>
                            </li>
                            <li>
                                <a href="mailto:michal@korkizfrontendu.pl">E-mail</a>
                            </li>
                        </StyledFooterNav>
                    </StyledFooterColumn>
                </StyledFooterWrapper>
                <StyledCopyright>
                    <p>
                        korkizfrontendu.pl &copy; sors 2020
                    </p>
                </StyledCopyright>
            </Container>
        </StyledFooter>
    )
}

export default Footer
