import React from 'react'
import styled from "styled-components"

const StyledAutoHeightSection = styled.section`
    background-color: ${props => props.bg};
`

const AutoHeightSection = ({ children, bg }) => <StyledAutoHeightSection bg={bg}>{children}</StyledAutoHeightSection>

export default AutoHeightSection
