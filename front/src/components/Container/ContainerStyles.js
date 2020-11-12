import styled, { css } from "styled-components"

import {
    above,
    under
} from '../../helpers/breakpoints'

import { theme } from '../../constants'

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${props => props.narrow ? 900 : (props.medium ? 1140 : 1400)}px;

    ${props => props.height ? `height: ${props.height};` : ''}

    margin: 0 auto;

    padding-left: ${theme.s(2)};
    padding-right: ${theme.s(2)};

    position: relative;

    display: flex;
    ${props => css`flex-direction: ${props.flexDirection ? props.flexDirection : 'row'};`}
    ${props => css`align-items: ${props.alignItems ? props.alignItems : 'flex-start'};`}
    ${props => css`justify-content: ${props.justifyContent ? props.justifyContent : 'flex-start'};`}

    ${props => css`padding-top: ${theme.s(props.py / 2)}; padding-bottom: ${theme.s(props.py / 2)};`}
    ${props => css`padding-top: ${theme.s(props.pt / 2)};`}
    ${props => css`padding-bottom: ${theme.s(props.pb / 2)};`}

    @media ${above.tablet} {
        ${props => css`padding-top: ${theme.s(props.py)}; padding-bottom: ${theme.s(props.py)};`}
        ${props => css`padding-top: ${theme.s(props.pt)};`}
        ${props => css`padding-bottom: ${theme.s(props.pb)};`}
    }
    @media ${under.tablet} {
        ${props => css`
            padding-top: ${theme.s(props.ptMobile)};
        `}
    }
`
