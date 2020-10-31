import React, { useContext } from 'react'

import { GlobalDispatchContext } from '../../context/GlobalContextProvider'

import { StyledBtn } from './NewsletterTogglerStyles'

export default function NewsletterModalButton({ children }) {
    const dispatch = useContext(GlobalDispatchContext)
    console.log('dispatch1', dispatch)

    return (
        <StyledBtn onClick={() => {
            dispatch({ type: 'TOGGLE_NEWSLETTER_MODAL' })
        }}>
            {children}
        </StyledBtn>
    )
}
