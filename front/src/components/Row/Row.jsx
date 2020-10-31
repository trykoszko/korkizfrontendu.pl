import React from 'react'

import {
    StyledRow
} from './RowStyles'

const Row = ({ children, flexDirection, alignItems, justifyContent }) => {
    return (
        <StyledRow flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent}>
            {children}
        </StyledRow>
    )
}

export default Row
