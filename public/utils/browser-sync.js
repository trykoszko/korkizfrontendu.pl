const path = require('path')

module.exports = () => {
  const browserSync = require('browser-sync')
  const connectBs = require('connect-browser-sync')
  const bsConfig = {
    host: 'localhost',
    port: 3001,
    https: false,
    notify: false,
    open: false,
    online: false,
    ui: false,
    proxy: 'localhost:3000',
    files: [path.join(__dirname, '/**/*.{hbs,css,js,json}')],
    debug: true
  }
  const bs = browserSync.create().init(bsConfig)
  return connectBs(bs)
}
