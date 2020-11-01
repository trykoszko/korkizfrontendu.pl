import styled, { css } from 'styled-components'

import {
    above
} from '../../helpers/breakpoints'

export const StyledCol = styled.div`
    display: flex;
    flex-direction: column;
    ${props => css`align-items: ${props.alignItems ? props.alignItems : 'flex-start'};`}
    ${props => css`justify-content: ${props.justifyContent ? props.justifyContent : 'flex-start'};`}

    @media ${above.smDesktop} {
        ${props => css`width: ${props.colWidth ? props.colWidth : 'auto'};`}

        ${props => props.ml ? css`margin-left: ${props.ml * 6}px;` : ''}
        ${props => props.mr ? css`margin-left: ${props.mr * 6}px;` : ''}
    }
`
