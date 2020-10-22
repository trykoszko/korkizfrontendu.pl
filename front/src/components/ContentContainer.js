import React from 'react'
import styled, { css } from "styled-components"

import {
    theme
} from '../constants'

import {
    above
} from '../helpers/breakpoints'

const StyledContentContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    font-size: .8rem;
    line-height: 1.5;

    @media ${above.tablet} {
        ${props => css`padding-top: ${theme.s(props.pyDesktop)}; padding-bottom: ${theme.s(props.pyDesktop)};`}
    }
`

const ContentContainer = ({ children, pyDesktop }) => {
    return <StyledContentContainer pyDesktop={pyDesktop}>{children}</StyledContentContainer>
}

export default ContentContainer
