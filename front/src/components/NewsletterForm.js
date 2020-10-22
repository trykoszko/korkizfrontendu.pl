import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { theme } from '../constants'
import { above, under } from '../helpers/breakpoints'

import Btn from './Btn'
import Label from './Label'

const StyledNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;

    ${props => props.isLoading ? `opacity: .4;` : ``}

    input {
        border: none;
        border-radius: ${theme.borderRadius.small};

        padding: ${theme.s(2)};
    }

    @media ${under.tablet} {

        input {
            margin-bottom: ${theme.s()};
        }
    }
    @media ${above.tablet} {
        max-width: 90%;

        input {
            margin-right: ${theme.s()};
        }
    }
`

const StyledNewsletterWrapper = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: ${props => props.layout};

    margin-bottom: ${theme.s()};

    ${props => props.isSent ? `display: none;` : ''}

    @media ${under.tablet} {
        flex-direction: ${props => props.mobileLayout};
    }
`

const StyledInput = styled.input`

    @media ${above.tablet} {
        ${props => props.width ? `width: ${props.width}` : ''};
    }
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

        display: flex;
    }

    opacity: .7;
`

const StyledFormResponse = styled.p`
    font-size: .8rem;

    padding: ${theme.s()};

    border-radius: 3px;

    background-color: ${props => props.resType ? 'green' : 'red'};
    color: ${props => props.resType ? 'white' : 'black'};
`

const FormResponse = ({ response }) => {
    return <StyledFormResponse resType={response.success}>{response.message}</StyledFormResponse>
}

const NewsletterForm = ({ layout }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [formResponse, setFormResponse] = useState('')

    const emailRef = React.createRef()
    const checkboxRef_1 = React.createRef()
    const checkboxRef_2 = React.createRef()

    const handleSubmission = async e => {
        e.preventDefault()
        setIsLoading(true)
        axios.post(`${process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://korkizfrontendu.pl'}/subscribe/newsletter`, {
            email: emailRef.current.value,
            terms_accepted: checkboxRef_1.current.checked,
            user_interested: checkboxRef_2.current.checked
        })
            .then(res => {
                setTimeout(() => {
                    setIsLoading(false)
                    setIsSent(true)
                    setFormResponse({
                        success: true,
                        message: res.data.message,
                        err: res.data.err
                    })
                }, 1000)
            })
            .catch(err => {
                setIsLoading(false)
                setIsSent(false)
                setFormResponse({
                    success: false,
                    message: '',
                    err: err
                })
            })
    }

    return (
        <StyledNewsletterForm isLoading={isLoading} layout={layout} onSubmit={handleSubmission}>
            <StyledNewsletterWrapper>
                {formResponse && <FormResponse response={formResponse} />}
            </StyledNewsletterWrapper>
            <StyledNewsletterWrapper mobileLayout="column" isSent={isSent}>
                <Label srOnly htmlFor="email">
                    Twój e-mail
                </Label>
                <StyledInput ref={emailRef} width="70%" type="email" name="email" placeholder="Wpisz e-mail" required />
                <Btn width="30%" type="submit">
                    Subskrybuj
                </Btn>
            </StyledNewsletterWrapper>
            <StyledNewsletterWrapper layout="column" isSent={isSent}>
                <StyledRadioGroup>
                    <input
                        aria-label="Akceptuję regulamin"
                        aria-required="true"
                        ref={checkboxRef_1}
                        type="checkbox"
                        name="terms_accepted"
                        id="terms_accepted"
                        required
                    />
                    <Label htmlFor="terms_accepted">
                        <span>
                            Zapisując się do newslettera wyrażasz zgodę na otrzymywanie informacji o nowościach, produktach i usługach <strong>korkizfrontendu.pl</strong> i <strong>sors Michał Trykoszko</strong> oraz akceptujesz <a href="/regulamin">regulamin</a>
                        </span>
                    </Label>
                </StyledRadioGroup>
                <StyledRadioGroup>
                    <input
                        ref={checkboxRef_2}
                        type="checkbox"
                        name="user_interested"
                        id="user_interested"
                    />
                    <Label htmlFor="user_interested">
                        <span>
                            <strong>Jestem wstępnie zainteresowany</strong> szkoleniem i chciałbym uzyskać o nim więcej informacji
                        </span>
                    </Label>
                </StyledRadioGroup>
            </StyledNewsletterWrapper>
        </StyledNewsletterForm>
    )
}

export default NewsletterForm
