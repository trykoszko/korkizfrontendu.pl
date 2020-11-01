import styled, { css } from 'styled-components'

import { theme } from '../../constants'

export const StyledFeed = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const StyledFeedItem = styled.li`
    margin: 0;
    padding: 0;

    flex: 0 0 calc(100% / 3);
`
