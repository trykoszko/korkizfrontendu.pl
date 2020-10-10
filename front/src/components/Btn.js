import React from 'react'
import styled from 'styled-components'

import { theme } from '../constants'

const StyledBtn = styled.button`
    background-color: ${theme.colorOrange};
    color: white;

    border: 0;

    cursor: pointer;

    border-radius: ${theme.borderRadius.small};

    ${props => props.width ? `width: ${props.width}` : ''};

    &:hover {
        background-color: ${theme.colorPrimary};
    }
`

const Btn = ({ children, width }) => <StyledBtn width={width}>{children}</StyledBtn>

export default Btn
