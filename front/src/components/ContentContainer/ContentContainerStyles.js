import styled, { css } from "styled-components"

import {
    theme
} from '../../constants'

import {
    above
} from '../../helpers/breakpoints'

export const StyledContentContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    font-size: 1rem;
    line-height: 1.5;

    &:first-child {
        padding-top: 0;
    }

    /* h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 6%;
    } */

    hr {
        display: block;

        width: 100%;
        height: 0;

        border: none;
        border-bottom: 1px solid ${theme.colorDefault};
    }

    a {
        border-bottom: 2px solid ${theme.colorPrimary};

        &:hover {
            text-decoration: none;

            border-color: ${theme.colorOrange};
        }
    }

    @media ${above.tablet} {
        ${props => css`padding-top: ${theme.s(props.pyDesktop)}; padding-bottom: ${theme.s(props.pyDesktop)};`}
        ${props => props.centered ? css`text-align: center;` : ''}
    }
`
