import styled, { css } from 'styled-components'

import {
    theme
} from '../../constants'

import {
    above
} from '../../helpers/breakpoints'

export const StyledNavbarWrapper = styled.header`
    /* position: absolute;
    top: 0;
    left: 0; */

    width: 100%;
    height: auto;

    z-index: 900;

    background-color: ${theme.colorBeige};

    ${props => props.bg ? css`background-color: ${props.bg};` : ''}

    a {
        margin: 0;
    }
`

export const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0;

    @media ${above.mobile} {
        flex-direction: row;
    }
`

export const StyledNav = styled.ul`
    list-style: none;
    padding: 0;

    margin: ${theme.s()} 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: ${theme.monoFont};
    font-size: 1rem;

    & > li {
        display: block;
        margin: 0 ${theme.s(2)};
        padding: ${theme.s()} 0;
    }

    @media ${above.mobile} {
        flex-direction: row;

        & > li {
            &:last-child {
                margin-right: 0;
            }
        }
    }
`
