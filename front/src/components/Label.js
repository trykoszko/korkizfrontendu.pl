import React from 'react'
import styled from 'styled-components'

import { theme } from '../constants'

const StyledLabel = styled.label`
    ${props => props.srOnly ? `display: none;` : ''}
`

const Label = ({ children, srOnly }) => <StyledLabel srOnly={srOnly}>{children}</StyledLabel>

export default Label
