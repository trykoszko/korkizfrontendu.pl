import styled, { css } from 'styled-components'

import {
    theme
} from '../../constants'

export const StyledAutoHeightSection = styled.section`
    background-color: ${props => props.bg};
    color: ${props => props.textColor};

    max-height: 10000px;
    overflow: hidden;

    ${theme.transitions.slow}

    ${props => props.isHidden ? css`max-height: 0;` : ''}
`
