import React from 'react'
import { StyledLabel } from './LabelStyles'

const Label = ({ children, srOnly, htmlFor }) => <StyledLabel htmlFor={htmlFor} srOnly={srOnly}>{children}</StyledLabel>

export default Label
