// imports
const express = require('express')
const router = express.Router()
const eventService = require('../services/eventService')

// GET
router.get('/', function(req, res, next) {
  eventService.getAll()
    .then(data => {
      console.log('allEvents loaded')
      res.render('index', { title: 'Korki z Front-endu | sors Michał Trykoszko' })
    })
})

// POST
// @todo post: form with newsletter submit

module.exports = router
