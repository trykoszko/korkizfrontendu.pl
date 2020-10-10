const express = require('express')
const router = express.Router()

router.post('/submission/newsletter', function(req, res, next) {
    console.log('req.params', req.params)
    const {
      email,
      consent_1,
      consent_2
    } = req.params
    NewsletterEntry.add(email, consent_1, consent_2)
      .then(data => {
        console.log('NewsletterEntry.add', data)
      })
})

module.exports = router
