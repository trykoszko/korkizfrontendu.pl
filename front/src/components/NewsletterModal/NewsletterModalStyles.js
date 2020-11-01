import styled from 'styled-components'

import {
    under
} from '../../helpers/breakpoints'

import {
    theme
} from '../../constants'

export const StyledModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: ${props => props.isVisible ? 0 : `-120%`};

    ${theme.transitions.ease}

    background-color: rgba(1, 13, 64, .9);

    width: 100%;
    height: 100%;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledModal = styled.div`
    display: flex;

    background-color: white;

    position: relative;

    @media ${under.tablet} {
        margin-left: ${theme.s(2)};
        margin-right: ${theme.s(2)};
    }
`

export const StyledModalCloseButton = styled.button`
    position: absolute;
    top: ${theme.s(2)};
    right: ${theme.s(2)};

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

    cursor: pointer;

    width: ${theme.s(4)};
    height: ${theme.s(4)};

    display: block;

    z-index: 10;

    ${theme.transitions.quick}

    img {
        margin: 0;
        padding: 0;

        max-width: 100%;
        height: auto;
    }

    &:hover {
        transform: rotate(90deg);
    }
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    @media ${under.tablet} {
        width: ${theme.s(2.5)};
        height: ${theme.s(2.5)};
    }
`
