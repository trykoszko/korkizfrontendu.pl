// dotenv
require('dotenv').config()

// imports
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const hbs = require('express-handlebars')

// custom middleware
const forceHTTPS = require('./middleware/require-https')
const consoleNotify = require('./middleware/console-notify')

// is development env variable
const isDev = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development'

// routers
const indexRouter = require('./routes/index')
const submissionRouter = require('./routes/submission')

// initialize our app
const app = express()

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}))


if (isDev) {
  consoleNotify.devStarted()
  app.use(logger('dev'))
} else {
  app.use(forceHTTPS)
  consoleNotify.prodStarted()
}

// other middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

// static assets
app.use('/static', express.static(path.join(__dirname, 'static')))

// routes
app.use('/', indexRouter)
app.use('/submission', submissionRouter)

// set port
app.listen(isDev ? process.env.PORT_DEV : (process.env.PORT ? process.env.PORT : process.env.PORT_PROD))

// handle errors
app.use(function(req, res, next) {
  next(createError(404))
})

// handle error messages
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = isDev ? err : {}
  res.status(err.status || 500)
  res.render('pages/error')
})

// app export
module.exports = app
