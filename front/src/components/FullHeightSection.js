import React from 'react'
import styled from "styled-components"

const StyledFullHeightSection = styled.section`
    height: 100vh;

    background-color: ${props => props.bg};
`

const FullHeightSection = ({ children, bg }) => <StyledFullHeightSection bg={bg}>{children}</StyledFullHeightSection>

export default FullHeightSection
