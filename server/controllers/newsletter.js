const NewsletterEntry = require('../models').newsletterEntries
const randomstring = require('randomstring')

module.exports = {

    // @todo messages i18n

    async add(req, res) {
        if (!req.body.email) {
            res.status(400).send({
                success: false,
                message: 'Brak lub nieprawidłowy e-mail ❌'
            })
            return
        }

        if (!req.body.terms_accepted) {
            res.status(400).send({
                success: false,
                message: 'Nie zaakceptowałeś regulaminu ❌'
            })
            return
        }

        const entry = {
            email: req.body.email,
            terms_accepted: req.body.terms_accepted,
            user_interested: req.body.user_interested
        }

        const mailExists = await NewsletterEntry.findOne({ email: req.body.email })
        if (mailExists) {
            return res
                .send({
                    success: true,
                    message: 'Twój e-mail jest już w bazie ✔️'
                })
        }

        NewsletterEntry.create(entry)
            .then(newsletterEntry => {
                const {
                    id,
                    email
                } = newsletterEntry.dataValues
                const removalKey = randomstring.generate(10)
                // client email
                // @todo cleanup, add hbs
                transporter.sendMail({
                    from: `Korki z Front-endu <${process.env.ADMIN_EMAIL}>`,
                    to: email,
                    subject: 'Dziękuję za rejestrację na korkizfrontendu.pl',
                    replyTo: process.env.ADMIN_EMAIL,
                    html: `
                        <h2>Cześć!</h2>
                        Dzięki za rejestrację na Korkach z Front-endu!
                        <br><br>
                        W niedługim czasie dostaniesz ode mnie e-maile z informacjami nt. szkoleń.
                        <br><br>
                        Pamiętaj, że w każdej chwili możesz wypisać się z listy mailingowej <a href="${process.env.URL}/unsubscribe/newsletter/${email}/${removalKey}">tutaj</a>.
                        <br><br><br>
                        Pozdrawiam,
                        <br>
                        Michał
                        <br>
                        <a href="${process.env.URL}">korkizfrontendu.pl</a>
                    `
                }, async err => {
                    let messageSent = true
                    if (err) {
                        messageSent = false
                    }
                    await newsletterEntry.update({ removal_key: removalKey, email_sent: messageSent, email_sent_date: new Date().toString() })
                })
                // admin email
                // @todo cleanup, add hbs
                transporter.sendMail({
                    from: `Korki z Front-endu <${process.env.ADMIN_EMAIL}>`,
                    to: process.env.ADMIN_EMAIL,
                    subject: 'Nowa rejestracja na Korkizfrontendu.pl',
                    replyTo: email,
                    html: `
                        <h2>Cześć</h2>
                        <a href="mailto:${email}">${email}</a> [ID: ${id}]
                        <br><br>
                        właśnie zarejestrował się na Korkach.
                        <br><br>
                        Pozdro,
                        <br>
                        <a href="${process.env.URL}">korkizfrontendu.pl</a>
                    `
                }, async err => {
                    let messageSent = true
                    if (err) {
                        messageSent = false
                    }
                    await newsletterEntry.update({ admin_email_sent: true, admin_email_sent_date: new Date().toString() })
                    res
                        .status(201)
                        .send({
                            success: true,
                            message: `Dziękuję za zainteresowanie szkoleniem. Twój e-mail został dodany do bazy! ✔️ ${messageSent ? '📧' : ''}`,
                            err: err
                        })
                })
            })
            .catch(err => {
                console.log('err', err)
                res
                    .status(400)
                    .send({
                        success: false,
                        message: 'Wystąpił błąd podczas rejestracji do newslettera ❌'
                    })
            })
    },

    async remove(req, res) {

        const {
            email,
            removalKey
        } = req.params

        const entry = await NewsletterEntry.findOne({ email: email })
        if (!entry) {
            return res
                .status(400)
                .send({
                    success: false,
                    message: 'Podany e-mail nie istnieje w bazie danych ❌'
                })
        }

        const isKeyCorrect = removalKey === entry.dataValues.removal_key
        if (isKeyCorrect) {
            await entry.destroy()
        }
        return res
            .send({
                success: true,
                message: isKeyCorrect
                    ? 'Twój e-mail został usunięty z bazy danych korkizfrontendu.pl ✔️'
                    : 'Klucz weryfikacyjny nie jest poprawny. E-mail nie został usunięty z bazy danych korkizfrontendu.pl ❌'
            })
    }

}
