import React from 'react'
import styled, { css } from "styled-components"

import { above } from '../helpers/breakpoints'
import { theme } from '../constants'

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${props => props.narrow ? `900` : '1140'}px;

    ${props => props.height ? `height: ${props.height};` : ''}

    margin: 0 auto;

    padding-left: ${theme.s(2)};
    padding-right: ${theme.s(2)};

    position: relative;

    display: flex;
    ${props => css`flex-direction: ${props.flexDirection ? props.flexDirection : 'row'};`}
    ${props => css`align-items: ${props.alignItems ? props.alignItems : 'flex-start'};`}
    ${props => css`justify-content: ${props.justifyContent ? props.justifyContent : 'flex-start'};`}

    ${props => css`padding-top: ${theme.s(props.py)}; padding-bottom: ${theme.s(props.py)};`}
    // @media ${above.desktop} {
    //     max-width: 1140px;
    // }
`

const Container = ({ children, height, flexDirection, alignItems, justifyContent, py, narrow }) => {
    return <StyledContainer narrow={narrow} py={py} height={height} flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent}>{children}</StyledContainer>
}

export default Container
