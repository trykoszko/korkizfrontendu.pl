import React, { useState } from 'react'
import axios from 'axios'

import Btn from '../Btn/Btn.jsx'
import Label from '../Label/Label.jsx'

import {
    StyledNewsletterForm,
    StyledNewsletterWrapper,
    StyledInput,
    StyledRadioGroup,
    StyledFormResponse,
    StyledCheckbox
} from './NewsletterFormStyles'

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
                    Zapisuję się &raquo;
                </Btn>
            </StyledNewsletterWrapper>
            <StyledNewsletterWrapper layout="column" isSent={isSent}>
                <StyledRadioGroup>
                    <StyledCheckbox
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
                            * Zapisując się do newslettera wyrażasz zgodę na otrzymywanie informacji o nowościach, produktach i usługach <strong>korkizfrontendu.pl</strong> i <strong>sors Michał Trykoszko</strong> oraz akceptujesz <a href="/regulamin">regulamin</a>. Pamiętaj, że <strong>nigdy nie wyślę Ci spamu</strong>
                        </span>
                    </Label>
                </StyledRadioGroup>
                <StyledRadioGroup>
                    <StyledCheckbox
                        aria-label="Jestem wstępnie zainteresowany"
                        aria-required="false"
                        ref={checkboxRef_2}
                        type="checkbox"
                        name="user_interested"
                        id="user_interested"
                    />
                    <Label htmlFor="user_interested">
                        <span>
                            <strong>Jestem wstępnie zainteresowany</strong> szkoleniem i chciałbym uzyskać o nim więcej informacji (zaznaczenie tego punktu nie oznacza rejestracji w programie).
                        </span>
                    </Label>
                </StyledRadioGroup>
            </StyledNewsletterWrapper>
        </StyledNewsletterForm>
    )
}

export default NewsletterForm
