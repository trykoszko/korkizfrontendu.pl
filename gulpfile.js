const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const webpack = require('webpack-stream')
const webpackConfig = require('./public/static/webpack/webpack.config.prod.js')

gulp.task('compile', function () {
  console.log(' ')
  console.log('⚡⚡⚡ Webpack compiling... ⚡⚡⚡')
  console.log(' ')
  const stream = gulp.src('./public/static/src/js/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/static/build'))
    console.log(' ')
    console.log('🔥🔥🔥 Webpack compiled! 🔥🔥🔥')
    console.log(' ')
  return stream
})

gulp.task('default', function (done) {
  const stream = nodemon({
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
  return stream
})
