export const validators = {
    newsletterForm: values => {
        const errors = {}
        if (!values.password) {
            errors.password = 'Hasło jest wymagane'
        } else if (values.password.length < 6) {
            errors.password = 'Hasło powinno mieć więcej niż 6 znaków'
        } else if (!/\d/.test(values.password)) {
            errors.password = 'Dla bezpieczeństwa dodaj do hasła przynajmniej jedną cyfrę'
        }
        if (values.clientType === 'personal') {
            if (!values.firstname) {
                errors.firstname = 'Imię jest wymagane'
            } else if (values.firstname.length < 2) {
                errors.firstname = 'Imię jest za krótkie'
            }
            if (!values.lastname) {
                errors.lastname = 'Nazwisko jest wymagane'
            } else if (values.lastname.length < 2) {
                errors.lastname = 'Nazwisko jest za krótkie'
            }
        } else if (values.clientType === 'company') {
            if (!values.companyName) {
                errors.companyName = 'Nazwa firmy jest wymagana w przypadku rejestracji jako firma'
            }
            if (!values.nip) {
                errors.nip = 'NIP jest wymagany w przypadku rejestracji jako firma'
            } else if (values.nip.length !== 10) {
                errors.nip = 'NIP jest nieprawidłowy. Wpisz go bez spacji i myślników'
            }
        }
        if (!values.address) {
            errors.address = 'Adres jest wymagany. Podaj ulicę i numer domu/bloku'
        }
        if (!values.postalCode) {
            errors.postalCode = 'Kod pocztowy jest wymagany'
        }
        if (!values.city) {
            errors.city = 'Miasto jest wymagane'
        }
        if (!values.email) {
            errors.email = 'Adres e-mail jest wymagany';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Nieprawidłowy adres e-mail'
        }
        if (!values.allowRodo) {
            errors.allowRodo = 'Musisz zaakceptować regulamin RODO'
        }
        if (!values.allowTerms) {
            errors.allowTerms = 'Musisz zaakceptować treść regulaminu korków'
        }
        return errors
    }
}
