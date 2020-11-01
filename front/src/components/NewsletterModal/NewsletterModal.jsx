import React, { useContext } from 'react'

import {
    GlobalStateContext,
    GlobalDispatchContext
} from '../../context/GlobalContextProvider'

import NewsletterForm from '../NewsletterForm/NewsletterForm.jsx'
import Container from '../Container/Container.jsx'
import Row from '../Row/Row.jsx'
import Col from '../Col/Col.jsx'

import {
    StyledModalWrapper,
    StyledModal,
    StyledModalCloseButton
} from './NewsletterModalStyles'

import close from '../../../static/close.svg'

export default function NewsletterModal() {
    const state = useContext(GlobalStateContext)
    const dispatch = useContext(GlobalDispatchContext)

    return (
        <StyledModalWrapper isVisible={state.isNewsletterModalOpen}>
            <StyledModal>
                <StyledModalCloseButton onClick={() => {
                    dispatch({ type: 'TOGGLE_NEWSLETTER_MODAL' })
                }}>
                    <img src={close} alt="Zamknij" />
                </StyledModalCloseButton>
                <Container narrow ptMobile="8" py="10" pb="10" alignItems="center" justifyContent="center">
                    <Row alignItems="center" justifyContent="center">
                        <Col colWidth="100%" alignItems="center" justifyContent="center">
                            <NewsletterForm />
                        </Col>
                    </Row>
                </Container>
            </StyledModal>
        </StyledModalWrapper>
    )
}
