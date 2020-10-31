import React, { useContext } from 'react'

import {
    GlobalStateContext,
    GlobalDispatchContext
} from '../../context/GlobalContextProvider'

import NewsletterForm from '../NewsletterForm/NewsletterForm.jsx'

import {
    StyledModalWrapper,
    StyledModal,
    StyledModalCloseButton
} from './NewsletterModalStyles'

export default function NewsletterModal() {
    const state = useContext(GlobalStateContext)
    const dispatch = useContext(GlobalDispatchContext)

    return (
        <StyledModalWrapper isVisible={state.isNewsletterModalOpen}>
            <StyledModalCloseButton onClick={() => {
                dispatch({ type: 'TOGGLE_NEWSLETTER_MODAL' })
            }}>
                Close
            </StyledModalCloseButton>
            <StyledModal>
                <NewsletterForm />
            </StyledModal>
        </StyledModalWrapper>
    )
}
