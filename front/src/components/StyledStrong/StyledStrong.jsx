import React from 'react'

import { StyledStyledStrong } from './StyledStrongStyles'

const StyledStrong = ({ children, isStaticHeight }) => {
    return (
        <StyledStyledStrong isStaticHeight={isStaticHeight}>
            <span>{children}</span>
            <span></span>
        </StyledStyledStrong>
    )
}

export default StyledStrong
