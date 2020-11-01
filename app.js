const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const timeout = require('connect-timeout')
const hbs = require('express-handlebars')

const forceHTTPS = require('./server/middleware/require-https')

require('./server/mailer')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(helmet({
  contentSecurityPolicy: false
}))

app.use(timeout('10s'))

app.use(logger('dev'))

app.use(function(err, req, res, next) {
  console.log('Error!: ', err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// serve gatsby from static
app.use(express.static('front/public'))

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'main',
  layoutsDir: __dirname + '/server/views/layouts/',
  partialsDir: __dirname + '/server/views/partials/'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'server/views'))

const db = require('./server/models')
// if (process.env.NODE_ENV === 'development') {
//   db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and re-sync db.')
//   })
// }

require('./server/routes')(app)

if (process.env.NODE_ENV === 'production') {
  app.listen(80)
  // app.use(forceHTTPS)
  app.use (function (req, res, next) {
    if (req.secure) {
      next()
    } else {
      res.redirect('https://' + req.headers.host + req.url)
    }
  })
}

module.exports = app
