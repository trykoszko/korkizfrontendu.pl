import React from 'react'
import { StyledContentContainer } from './ContentContainerStyles'

const ContentContainer = ({ children, pyDesktop, centered }) => {
    return <StyledContentContainer centered={centered} pyDesktop={pyDesktop}>{children}</StyledContentContainer>
}

export default ContentContainer
