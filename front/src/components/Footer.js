import React from 'react'
import styled from 'styled-components'

import {
    theme,
    menuItems
} from '../constants'

import {
    above
} from '../helpers/breakpoints'

import Container from './Container'

const StyledFooter = styled.div`
    font-size: .8rem;

    height: 100%;
`

const StyledFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
`

const StyledFooterColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: ${theme.s(2)};

    & > * {
        margin: 0;
    }
    p {
        line-height: 1.5;
    }
    h4 {
        flex: 0 0 40%;
    }

    @media ${above.desktop} {
        h4 {
            flex: 0 0 20%;
        }
    }
`

const StyledFooterNav = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    font-family: ${theme.monoFont};

    li {
        display: block;

        margin: ${theme.s()} ${theme.s(2)} ${theme.s()} 0;

        padding: 0;
    }

    @media ${above.desktop} {
        justify-content: center;

        li {
            margin: 0;
            margin-right: ${theme.s(2)};
        }
    }
`

const StyledFooterNavItem = styled.li`
    ${props => props.isCurrent ? `
        a {
            position: relative;
            text-decoration: none;

            span {
                z-index: 1;
            }
            &:after {
                content: '';

                width: 100%;
                height: 30%;

                background-color: ${theme.colorOrange};

                position: absolute;
                bottom: 5%;
                left: 0;

                z-index: 0;

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

const StyledCopyright = styled.div`
    width: 100%;

    margin-top: ${theme.s(2)};

    text-align: center;

    p {
        margin: 0;
    }
`

const Footer = ({ currentPath }) => {
    const MenuItem = ({ id, url, title }) => {
        return (
            <StyledFooterNavItem isCurrent={url === currentPath || url + '/' === currentPath} key={id}>
                <a href={url}>
                    <span>{title}</span>
                </a>
            </StyledFooterNavItem>
        )
    }

    return (
        <StyledFooter>
            <Container narrow={true} flexDirection="column" height="100%" py={8}>
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
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/korkizfrontendu">Facebook</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCQAyRCvoXEgl4mMrVO5P5qQ">YouTube</a>
                            </li>
                            <li>
                                <a href="mailto:trykoszkom@gmail.com">E-mail</a>
                            </li>
                            <li>
                                <a href="https://t2m.io/v2FaNHR5">Discord</a>
                            </li>
                        </StyledFooterNav>
                    </StyledFooterColumn>
                </StyledFooterWrapper>
                <StyledCopyright>
                    <p>
                        &copy; sors Michał Trykoszko 2020
                    </p>
                </StyledCopyright>
            </Container>
        </StyledFooter>
    )
}

export default Footer
