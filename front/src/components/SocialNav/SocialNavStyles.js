import styled from 'styled-components'

import {
    theme
} from '../../constants'

export const StyledSocialNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    list-style: none;

    margin: 0;
    padding: 0;
`

export const StyledSocialNavItem = styled.li`

    &:not(:last-of-type) {
        margin-right: ${theme.s(3)};
    }
`
