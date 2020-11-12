import styled from 'styled-components'

import { theme } from '../../constants'

export const StyledMenuItem = styled.li`
    ${props => props.isCurrent ? `
        a {
            ${theme.underscoreDecor()}
        }
    ` : ``}
    ${props => props.isSpecial ? theme.specialLink : ``}
`
