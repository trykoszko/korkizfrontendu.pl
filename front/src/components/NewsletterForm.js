import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from '../constants'

import Btn from './Btn'
import Label from './Label'

const StyledNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 90%;

    input {
        border: none;
        border-radius: ${theme.borderRadius.small};

        padding: ${theme.s(2)};

        margin-right: ${theme.s()};
    }
`

const StyledNewsletterWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.layout};

    margin-bottom: ${theme.s()};
`

const StyledInput = styled.input`
    ${props => props.width ? `width: ${props.width}` : ''};
`

const StyledRadioGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-top: ${theme.s(2)};

    input {
        margin-right: ${theme.s()};
    }
    label {
        font-size: .75rem;
    }

    opacity: .7;
`

const NewsletterForm = ({ layout }) => {

    const handleSubmission = async e => {
        e.preventDefault()
        setIsLoading(true)
        console.log('isLoading1', isLoading)
        console.log('handleSubmission')
        console.log('e', e)

        setTimeout(() => {
            setIsLoading(false)
            console.log('isLoading2', isLoading)
        }, 10000)
    }

    const [isLoading, setIsLoading] = useState(false)

    return (
        <StyledNewsletterForm layout={layout} action="/submission/newsletter" method="POST" onSubmit={handleSubmission}>
            <StyledNewsletterWrapper>
                <Label srOnly htmlFor="email">
                    Twój e-mail
                </Label>
                <StyledInput width="70%" type="email" name="email" placeholder="Wpisz e-mail" required />
                <Btn width="30%" type="submit">
                    Subskrybuj
                </Btn>
            </StyledNewsletterWrapper>
            <StyledNewsletterWrapper layout="column">
                <StyledRadioGroup>
                    <input type="checkbox" name="consent_1" id="consent_1" required />
                    <Label htmlFor="consent_1">
                        Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly. We respect our customer opinions and deals with them with perfect wireframing.
                    </Label>
                </StyledRadioGroup>
                <StyledRadioGroup>
                    <input type="checkbox" name="consent_1" id="consent_1" required />
                    <Label htmlFor="consent_1">
                        Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly. We respect our customer opinions and deals with them with perfect wireframing.
                    </Label>
                </StyledRadioGroup>
            </StyledNewsletterWrapper>
        </StyledNewsletterForm>
    )
}

export default NewsletterForm
