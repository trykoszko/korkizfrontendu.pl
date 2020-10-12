import React from 'react'
import styled from "styled-components"

import { above } from '../helpers/breakpoints'

const StyledFullHeightSectionWrapper = styled.section`
    height: 100%;

    background-color: ${props => props.bg};

    @media ${above.desktop} {
        height: 100vh;
    }
`

const FullHeightSection = ({ children, bg }) => <StyledFullHeightSectionWrapper bg={bg}>{children}</StyledFullHeightSectionWrapper>

export default FullHeightSection
