const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')

require('./server/mailer')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(helmet({
  contentSecurityPolicy: false
}))

app.use(logger('dev'))

app.use(function(err, req, res, next) {
  console.log('Error!: ', err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// serve gatsby from static
const frontPath = path.join(__dirname, '../', 'front/public')
app.use(express.static(frontPath))

const db = require('./server/models')
if (process.env.ENV === 'development') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.')
  })
}

require('./server/routes')(app)

module.exports = app
