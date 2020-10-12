import React from 'react'
import styled from "styled-components"
const StyledContentContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    font-size: .8rem;
    line-height: 1.5;
`

const ContentContainer = ({ children }) => {
    return <StyledContentContainer>{children}</StyledContentContainer>
}

export default ContentContainer
