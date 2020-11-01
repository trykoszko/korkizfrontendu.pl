import styled, { css } from 'styled-components'

import {
    above
} from '../../helpers/breakpoints'

export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    ${props => css`justify-content: ${props.justifyContent ? props.justifyContent : 'flex-start'};`}

    width: 100%;

    z-index: 5;

    @media ${above.smDesktop} {
        ${props => css`flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};`}
        ${props => css`align-items: ${props.alignItems ? props.alignItems : 'flex-start'};`}
    }
`
