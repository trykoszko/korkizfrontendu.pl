import React from 'react'

import {
    socialMenuItems
} from '../../constants'

import {
    StyledSocialNav,
    StyledSocialNavItem
} from './SocialNavStyles'

const SocialNav = ({ children, srOnly, htmlFor }) => {
    return (
        <StyledSocialNav>
            {socialMenuItems.map(item => (
                <StyledSocialNavItem key={item.id}>
                    <a target="_blank" rel="noreferrer" href={item.url}>
                        {item.title}
                    </a>
                </StyledSocialNavItem>
            ))}
        </StyledSocialNav>
    )
}

export default SocialNav
