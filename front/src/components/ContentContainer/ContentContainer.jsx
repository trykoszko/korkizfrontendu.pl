import React from 'react'
import { StyledContentContainer } from './ContentContainerStyles'

const ContentContainer = ({ children, pyDesktop }) => {
    return <StyledContentContainer pyDesktop={pyDesktop}>{children}</StyledContentContainer>
}

export default ContentContainer
