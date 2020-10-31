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

    @media ${above.tablet} {
        ${props => css`padding-top: ${theme.s(props.pyDesktop)}; padding-bottom: ${theme.s(props.pyDesktop)};`}
    }
`
