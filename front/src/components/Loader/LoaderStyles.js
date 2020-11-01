import styled from 'styled-components'

import { theme } from '../../constants'

export const StyledLoader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: ${theme.s(6)};
    height: ${theme.s(6)};

    background: red;
`
