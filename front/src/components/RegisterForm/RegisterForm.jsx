import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { Link } from 'gatsby'

import {
  theme
} from '../../constants'

import {
  StyledRegisterForm,
  StyledLabel,
  StyledSelect,
  StyledInput,
  StyledFormGroup,
  StyledTextarea,
  StyledFormWrapper,
  StyledCheckboxWrapper
} from './RegisterFormStyles'

import Btn from '../Btn/Btn.jsx'
import AutoHeightSection from '../AutoHeightSection/AutoHeightSection.jsx'
import Container from '../Container/Container.jsx'
import ContentContainer from '../ContentContainer/ContentContainer'

import { countries } from '../../constants'
import { validators } from '../../helpers'
import providers from '../../providers'

const RegisterForm = () => {
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        clientType: 'personal',
        firstname: '',
        lastname: '',
        address: '',
        address2: '',
        companyName: '',
        nip: '',
        postalCode: '',
        city: '',
        country: '',
        invoiceAnnotations: '',
        allowRodo: false,
        allowTerms: false
      }}
      validate={values => validators.newsletterForm(values)}
      onSubmit={(values, { setSubmitting }) => {
        setIsSending(true)
        providers.post.submitNewsletter(values)
          .then(data => {
            setIsSending(false)
            setSubmitting(false)
            setIsSent(true)
            setIsSuccess(data.data.result)
            setResponse(data)
            if (!data.data.result) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          })
          .catch(error => {
            setIsSending(false)
            console.log('error', error)
            setSubmitting(false)
            setIsSent(false)
            setResponse(error)
          })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        return (
          <>
            <StyledRegisterForm onSubmit={handleSubmit}>
              <StyledFormWrapper>
                {isSent && !isSuccess && (
                  <AutoHeightSection bg={response?.data?.result ? 'green' : 'red'} textColor={response?.data?.result ? 'white' : 'white'}>
                    <Container narrow={true} pt="5" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
                      <ContentContainer>
                        {response && (
                          <>
                            <h2>
                              {response.data.result ? 'Sukces!' : 'Błąd'}
                            </h2>
                            <p>
                              {response.data.resultExplanation}
                            </p>
                          </>
                        )}
                      </ContentContainer>
                    </Container>
                  </AutoHeightSection>
                )}
                <AutoHeightSection bg={theme.colorBeigeAlt} isHidden={isSent && isSuccess}>
                  <Container narrow={true} ptMobile="5" pt="5" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
                    <StyledFormGroup isVisible isUnderlined>
                      <h2>
                        Wpisz swój e-mail i hasło
                      </h2>
                      <p>
                        Będą one służyły do logowania w panelu użytkownika.
                      </p>
                      <StyledLabel hasErrors={touched.email && errors.email} width="60%">
                        <span>
                          E-mail *
                        </span>
                        {touched.email && errors.email && (
                          <small>
                            {errors.email}
                          </small>
                        )}
                        <StyledInput
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.password && errors.password} width="60%">
                        <span>
                          Hasło *
                        </span>
                        {touched.password && errors.password && (
                          <small>
                            {errors.password}
                          </small>
                        )}
                        <StyledInput
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </StyledLabel>
                    </StyledFormGroup>
                  </Container>
                </AutoHeightSection>
                <AutoHeightSection bg="white" isHidden={isSent && isSuccess}>
                  <Container narrow={true} ptMobile="5" pt="7" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
                    <h2>
                      Uzupełnij dane personalne
                    </h2>
                    <p>
                      Poniższe dane są mi potrzebne do wystawienia faktury.
                    </p>
                    <StyledFormGroup isVisible>
                      <StyledLabel width="40%">
                        <span>
                          Rejestruję się jako...
                        </span>
                        <StyledSelect
                          id="clientType"
                          name="clientType"
                          value={values.clientType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="personal">Osoba fizyczna</option>
                          <option value="company">Firma</option>
                        </StyledSelect>
                      </StyledLabel>
                    </StyledFormGroup>
                    <StyledFormGroup isVisible={values.clientType === 'personal'} isUnderlined>
                      <StyledLabel hasErrors={touched.firstname && errors.firstname} width="40%">
                        <span>
                          Imię *
                        </span>
                        {touched.firstname && errors.firstname && (
                          <small>
                            {errors.firstname}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="firstname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstname}
                        />
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.lastname && errors.lastname} width="60%">
                        <span>
                          Nazwisko *
                        </span>
                        {touched.lastname && errors.lastname && (
                          <small>
                            {errors.lastname}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="lastname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastname}
                        />
                      </StyledLabel>
                    </StyledFormGroup>
                    <StyledFormGroup isVisible={values.clientType === 'company'} isUnderlined>
                      <StyledLabel hasErrors={touched.companyName && errors.companyName} width="55%">
                        <span>
                          Nazwa firmy *
                        </span>
                        {touched.companyName && errors.companyName && (
                          <small>
                            {errors.companyName}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="companyName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.companyName}
                        />
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.nip && errors.nip} width="45%">
                        <span>
                          NIP *
                        </span>
                        {touched.nip && errors.nip && (
                          <small>
                            {errors.nip}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="nip"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nip}
                        />
                      </StyledLabel>
                    </StyledFormGroup>
                    <StyledFormGroup isVisible isUnderlined>
                      <StyledLabel hasErrors={touched.address && errors.address}>
                        <span>
                          Adres *
                        </span>
                        {touched.address && errors.address && (
                          <small>
                            {errors.address}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                        />
                      </StyledLabel>
                      <StyledLabel>
                        <span>
                          Adres cd.
                        </span>
                        <StyledInput
                          type="text"
                          name="address2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address2}
                        />
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.postalCode && errors.postalCode} width="30%">
                        <span>
                          Kod pocztowy *
                        </span>
                        {touched.postalCode && errors.postalCode && (
                          <small>
                            {errors.postalCode}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="postalCode"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.postalCode}
                        />
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.city && errors.city} width="35%">
                        <span>
                          Miasto *
                        </span>
                        {touched.city && errors.city && (
                          <small>
                            {errors.city}
                          </small>
                        )}
                        <StyledInput
                          type="text"
                          name="city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                      </StyledLabel>
                      <StyledLabel width="35%">
                        <span>
                          Kraj
                        </span>
                        <StyledSelect
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                        </StyledSelect>
                      </StyledLabel>
                      <StyledLabel>
                        <span>
                          Uwagi/komentarz
                        </span>
                        <StyledTextarea name="invoiceAnnotations" />
                      </StyledLabel>
                    </StyledFormGroup>
                    <StyledFormGroup isVisible>
                      <StyledLabel hasErrors={touched.allowRodo && errors.allowRodo} flexDirection="row">
                        <StyledCheckboxWrapper>
                          <Field type="checkbox" name="allowRodo" />
                          <span>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych, zgodnie z <Link to="/regulamin">polityką prywatności i regulaminem</Link>. *
                          </span>
                        </StyledCheckboxWrapper>
                        {touched.allowRodo && errors.allowRodo && (
                          <small>
                            {errors.allowRodo}
                          </small>
                        )}
                      </StyledLabel>
                      <StyledLabel hasErrors={touched.allowTerms && errors.allowTerms} flexDirection="row">
                        <StyledCheckboxWrapper>
                          <Field type="checkbox" name="allowTerms" />
                          <span>
                            Przeczytałem(am) i akceptuję <Link to="/regulamin">regulamin</Link>. *
                          </span>
                        </StyledCheckboxWrapper>
                        {touched.allowTerms && errors.allowTerms && (
                          <small>
                            {errors.allowTerms}
                          </small>
                        )}
                      </StyledLabel>
                    </StyledFormGroup>
                    <StyledFormGroup isVisible>
                      <Btn type="submit" disabled={isSubmitting}>
                        {isSending ? 'Wysyłanie...' : 'Zakładam konto'}
                      </Btn>
                    </StyledFormGroup>
                    <br />
                    <p>
                      <small>
                        * - pole wymagane
                      </small>
                    </p>
                  </Container>
                </AutoHeightSection>
                {isSent && isSuccess && (
                  <AutoHeightSection bg={response?.data?.result ? 'green' : 'red'} textColor={response?.data?.result ? 'white' : 'white'}>
                    <Container narrow={true} pt="5" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
                      <ContentContainer>
                        {response && (
                          <>
                            <h2>
                              {response.data.result ? 'Sukces!' : 'Błąd'}
                            </h2>
                            <p>
                              {response.data.resultExplanation}
                            </p>
                          </>
                        )}
                      </ContentContainer>
                    </Container>
                  </AutoHeightSection>
                )}
              </StyledFormWrapper>
            </StyledRegisterForm>
          </>
        )
      }}
    </Formik>
  )
}

export default RegisterForm
