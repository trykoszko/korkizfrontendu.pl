module.exports = (sequelize, Sequelize) => {
    const NewsletterEntry = sequelize.define('newsletterEntry', {
        email: {
            type: Sequelize.STRING
        },
        terms_accepted: {
            type: Sequelize.BOOLEAN
        },
        user_interested: {
            type: Sequelize.BOOLEAN
        },
        email_sent: {
            type: Sequelize.BOOLEAN
        },
        email_sent_date: {
            type: Sequelize.STRING
        },
        admin_email_sent: {
            type: Sequelize.BOOLEAN
        },
        admin_email_sent_date: {
            type: Sequelize.STRING
        },
        removal_key: {
            type: Sequelize.STRING
        }
    })

    return NewsletterEntry
}
