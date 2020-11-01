import React from 'react'
import { StyledContainer } from './ContainerStyles'

const Container = ({ className, ptMobile, children, height, flexDirection, alignItems, justifyContent, py, pb, narrow, medium }) => {
    return <StyledContainer className={className} ptMobile={ptMobile} narrow={narrow} medium={medium} py={py} pb={pb} height={height} flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent}>{children}</StyledContainer>
}

export default Container
