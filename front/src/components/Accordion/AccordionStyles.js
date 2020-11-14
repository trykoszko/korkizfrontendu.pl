import styled, { css } from 'styled-components'

import {
    under
} from '../../helpers/breakpoints'

import { theme } from '../../constants'

export const StyledAccordion = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    width: 100%;
`

export const StyledAccordionItem = styled.li`
    width: 100%;
    margin: 0;
    margin-bottom: ${theme.s()};
`

export const StyledAccordionHeader = styled.button`
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

    padding: ${theme.s(1.5)} ${theme.s(2)};

    color: ${theme.colorPrimary};

    border: 1px solid ${theme.colorPrimary};

    width: 100%;

    cursor: pointer;

    position: relative;

    overflow: hidden;

    font-size: 1rem;
    font-family: ${theme.monoFont};
    text-align: left;

    border-radius: 8px;

    & > span {
        position: relative;

        ${theme.transitions.quick}

        &:first-child {
            position: absolute;
            top: 0;
            left: 0;

            width: ${theme.s(6)};
            height: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            border-right: 1px solid ${theme.colorPrimary};
        }
        &:last-child {
            position: absolute;
            top: 0;
            right: 0;

            transform: rotate(180deg);
        }
    }
    strong {
        margin-left: ${theme.s(6)};

        max-width: 80%;

        display: block;

        @media ${under.smDesktop} {
            max-width: 60%;
        }
    }

    ${props => props.isOpen ? css`
        & > span {
            &:last-child {
                transform: rotate(0deg);
            }
        }
    ` : ''}
`

export const StyledAccordionContent = styled.div`
    margin: 0;
    padding: 0;

    max-height: 0;
    overflow: hidden;
    opacity: 0;

    ${theme.transitions.quick};

    padding-bottom: 10px;
    padding-left: ${theme.s()};
    padding-right: ${theme.s()};

    ${props => props.isOpen ? css`
        max-height: 1000px;

        margin-top: ${theme.s(4)};
        padding-bottom: ${theme.s(4)};

        opacity: 1;
    ` : ''}
`

export const StyledChevronWrapper = styled.span`
    width: ${theme.s(6)};
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const StyledChevron = styled.img`
    max-width: ${theme.s(2)};
    height: auto;
`
