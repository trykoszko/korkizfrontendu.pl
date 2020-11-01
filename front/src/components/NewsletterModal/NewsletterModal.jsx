import React, { useContext } from 'react'
import styled from 'styled-components'

import {
    above
} from '../../helpers/breakpoints'

import {
    theme
} from '../../constants'

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

const StyledContainer = styled(Container)`
    padding: ${theme.s(2)};
    padding-top: ${theme.s(6)};

    @media ${above.smDesktop} {
        padding: ${theme.s(8)};
    }
`

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
                <StyledContainer narrow alignItems="center" justifyContent="center">
                    <Row alignItems="center" justifyContent="center">
                        <Col colWidth="100%" alignItems="center" justifyContent="center">
                            <NewsletterForm />
                        </Col>
                    </Row>
                </StyledContainer>
            </StyledModal>
        </StyledModalWrapper>
    )
}
