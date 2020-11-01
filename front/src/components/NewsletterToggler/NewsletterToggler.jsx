import React, { useContext } from 'react'

import { GlobalDispatchContext } from '../../context/GlobalContextProvider'

import { StyledNewsletterToggler } from './NewsletterTogglerStyles'

export default function NewsletterToggler({ children, type, mt }) {
    const dispatch = useContext(GlobalDispatchContext)

    return (
        <StyledNewsletterToggler mt={mt} type={type} onClick={() => {
            dispatch({ type: 'TOGGLE_NEWSLETTER_MODAL' })
        }}>
            <span>
                {children}
            </span>
        </StyledNewsletterToggler>
    )
}
