import React from 'react'
import { StyledContainer } from './ContainerStyles'

const Container = ({ children, height, flexDirection, alignItems, justifyContent, py, pb, narrow, medium }) => {
    return <StyledContainer narrow={narrow} medium={medium} py={py} pb={pb} height={height} flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent}>{children}</StyledContainer>
}

export default Container
