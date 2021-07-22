const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoPrefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

function compileSass() {
  return gulp
    .src('styles/css/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('styles/css/'))
    .pipe(browserSync.stream())
}
gulp.task('sass', compileSass)

function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
}

gulp.task('browser-sync', browser)

function watch() {
  gulp.watch('styles/css/scss/*.scss', compileSass)
}

gulp.task('watch', watch)
gulp.task('default', gulp.parallel(['watch', 'browser-sync']))