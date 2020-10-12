import React from 'react'
import styled from 'styled-components'

import { theme } from '../constants'
import { above } from '../helpers/breakpoints'

const StyledBtn = styled.button`
    background-color: ${theme.colorOrange};
    color: white;

    border: 0;

    cursor: pointer;

    border-radius: ${theme.borderRadius.small};

    padding: ${theme.s(2)};

    &:hover {
        background-color: ${theme.colorPrimary};
    }

    @media ${above.desktop} {
        ${props => props.width ? `width: ${props.width}` : ''};
    }
`

const Btn = ({ children, width }) => <StyledBtn width={width}>{children}</StyledBtn>

export default Btn
