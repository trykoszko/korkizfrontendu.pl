import styled from 'styled-components'

import {
    theme
} from '../../constants'

export const StyledLabel = styled.label`
    ${props => props.srOnly ? `display: none;` : ''}

    &:hover {
        cursor: pointer;
    }

    a {
        color: ${theme.colorOrangeAlt};
    }

    font-size: 1rem;
`
