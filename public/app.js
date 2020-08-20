// dotenv
require('dotenv').config()

// imports
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const cors = require('cors')

// is development env variable
const isDev = process.env.NODE_ENV === 'dev'

// import routers
const indexRouter = require('./routes/index')
const connectBrowserSync = require('connect-browser-sync')

// initialize our app
const app = express()

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// logger
if (isDev) {
  console.log('✅✅✅ Development server started! ✅✅✅')
  app.use(logger('dev'))
  const browserSync = require('browser-sync')
  const connectBs = require('connect-browser-sync')
  const bsConfig = {
    host: 'localhost',
    port: 80,
    https: false,
    notify: false,
    open: false,
    online: false,
    ui: false,
    proxy: 'localhost:3000',
    files: [path.join(__dirname, '/**/*.{hbs,html,css,js,json}')]
  }
  const bs = browserSync.create().init(bsConfig)
  app.use(connectBs(bs))
} else {
  console.log('✅✅✅ Production server started! ✅✅✅')
}

// other middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

// static assets
app.use(sassMiddleware({
  src: path.join(__dirname),
  dest: path.join(__dirname),
  indentedSyntax: false,
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'static')))

// routes
app.use('/', indexRouter)

// set prod or dev port for the app
app.listen(isDev ? process.env.PORT_DEV : process.env.PORT_PROD)

// handle errors
app.use(function(req, res, next) {
  next(createError(404))
})

// handle error messages
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = isDev ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

// app export
module.exports = app
