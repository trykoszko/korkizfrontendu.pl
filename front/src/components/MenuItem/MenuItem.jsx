import React from 'react'
import { Link } from 'gatsby'

import {
    StyledMenuItem,
} from './MenuItemStyles'

const MenuItem = ({ id, url, title, currentPath }) => {
    return (
        <StyledMenuItem isCurrent={url === currentPath || url + '/' === currentPath} key={id}>
            <Link to={url}>
                <span>{title}</span>
            </Link>
        </StyledMenuItem>
    )
}

export default MenuItem
