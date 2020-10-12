import React from 'react'
import styled from "styled-components"

import { above } from '../helpers/breakpoints'

const StyledFullHeightSection = styled.section`
    height: auto;

    background-color: ${props => props.bg};

    @media ${above.desktop} {
        height: 100vh;
    }
`

const FullHeightSection = ({ children, bg }) => <StyledFullHeightSection bg={bg}>{children}</StyledFullHeightSection>

export default FullHeightSection
