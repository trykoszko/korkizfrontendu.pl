// imports
const express = require('express')
const router = express.Router()
const eventService = require('../services/eventService')

// GET
router.get('/', function(req, res, next) {
  eventService.getAll()
    .then(data => {
      console.log('allEvents loaded')
      res.render('index', { title: 'hejka' })
    })
})

// POST
// @todo post

module.exports = router
