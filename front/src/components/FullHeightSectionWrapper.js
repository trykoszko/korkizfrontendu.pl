import React from 'react'
import styled from "styled-components"

const StyledFullHeightSectionWrapper = styled.section`
    height: 100vh;

    background-color: ${props => props.bg};
`

const FullHeightSection = ({ children, bg }) => <StyledFullHeightSectionWrapper bg={bg}>{children}</StyledFullHeightSectionWrapper>

export default FullHeightSection
