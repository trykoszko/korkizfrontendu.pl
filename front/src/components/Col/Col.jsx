import React from 'react'

import {
    StyledCol
} from './ColStyles'

const Col = ({ children, colWidth, ml, mr, alignItems, justifyContent }) => {
    return (
        <StyledCol alignItems={alignItems} justifyContent={justifyContent} colWidth={colWidth} ml={ml} mr={mr}>
            {children}
        </StyledCol>
    )
}

export default Col
