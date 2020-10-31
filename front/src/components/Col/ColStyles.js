import styled, { css } from 'styled-components'

import {
    above
} from '../../helpers/breakpoints'

export const StyledCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${props => css`width: ${props.colWidth ? props.colWidth : 'auto'};`}

    ${props => props.ml ? css`margin-left: ${props.ml * 2}px;` : ''}
    ${props => props.mr ? css`margin-left: ${props.mr * 2}px;` : ''}

    @media ${above.tablet} {
        ${props => props.ml ? css`margin-left: ${props.ml * 6}px;` : ''}
        ${props => props.mr ? css`margin-left: ${props.mr * 6}px;` : ''}
    }
`
