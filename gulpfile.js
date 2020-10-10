const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack/webpack.config.prod.js')

gulp.task('compile', function () {
  console.log(' ')
  console.log('⚡⚡⚡ Webpack compiling... ⚡⚡⚡')
  console.log(' ')
  const stream = gulp
    .src('./public/static/src')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/static/build'))
    console.log(' ')
    console.log('🔥🔥🔥 Webpack compiled! 🔥🔥🔥')
    console.log(' ')
  return stream
})

gulp.task('nodemon', function (cb) {
  let called = false
  return nodemon({
    script: './public/app.js',
    watch: [
      './public/app.js',
      './public/views',
      './public/static/src/**/*.{js,scss}'
    ],
    tasks: [
      'compile'
    ],
    env: {
      'NODE_ENV': 'dev'
    },
    ext: 'js,scss,hbs'
  })
    .on('start', function () {
      if (!called) {
        called = true
        cb()
      }
    })
    .on('restart', function () {
      setTimeout(function () {
        reload({ stream: false })
      }, 1000)
    })
})

gulp.task('browser-sync', gulp.parallel('nodemon', function() {
  browserSync({
    proxy: "localhost:3000",
    port: 2137,
    notify: true,
    open: false
  })
}))

gulp.task('default', gulp.parallel('browser-sync', function () {
  gulp.watch(['./public/static/**/*.{hbs,js,scss}'], reload)
}))
