import React from 'react'
import styled from 'styled-components'

import {
    theme
} from '../constants'

const StyledLabel = styled.label`
    ${props => props.srOnly ? `display: none;` : ''}

    &:hover {
        cursor: pointer;
    }

    a {
        color: ${theme.colorOrangeAlt};
    }
`

const Label = ({ children, srOnly, htmlFor }) => <StyledLabel htmlFor={htmlFor} srOnly={srOnly}>{children}</StyledLabel>

export default Label
