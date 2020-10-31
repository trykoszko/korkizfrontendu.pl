import React from 'react'

import {
    StyledCol
} from './ColStyles'

const Col = ({ children, colWidth, ml, mr }) => {
    return (
        <StyledCol colWidth={colWidth} ml={ml} mr={mr}>
            {children}
        </StyledCol>
    )
}

export default Col
