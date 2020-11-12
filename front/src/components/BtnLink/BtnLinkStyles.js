import styled, { css } from 'styled-components'

import { theme } from '../../constants'
import { above } from '../../helpers/breakpoints'

export const StyledBtn = styled.a`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    padding: ${theme.s(2)} ${theme.s(3)};
    padding-right: ${theme.s(4)};

    background-color: ${theme.colorOrange};
    color: white;
    border-radius: ${theme.borderRadius.medium};

    cursor: pointer;

    position: relative;

    overflow: hidden;

    font-family: ${theme.monoFont};

    display: block;

    align-self: center;

    ${props => props.mt ? css`margin-top: ${props.mt}px;` : ''}

    @media ${above.smDesktop} {
        span {
            position: relative;

            &:after {
                content: '»';
                position: absolute;

                right: -${theme.s(2)};
                top: -${theme.s(.2)};

                animation: bounce 2s infinite;
            }
        }
    }

    &:hover {
        background-color: ${props => props.type === 'orange' ? 'white' : theme.colorOrange};
        color: ${props => props.type === 'orange' ? theme.colorPrimary : theme.colorPrimary};
    }
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`
