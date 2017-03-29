const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const clean = require('gulp-clean')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')

const paths = {
  js: 'src/js/*',
  sass: 'src/sass/**/*',
  img: 'src/img/**/*'
}

gulp.task('babel', () => {
  return gulp.src(paths.js)
  .pipe(babel({presets: ['es2015']}))
  .pipe(gulp.dest('tmp/js'))
})

gulp.task('js', ['babel'], () => {
  return gulp.src('tmp/js/scripts.js')
  .pipe(browserify())
  .pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {
  return gulp.src(paths.sass)
  .pipe(sass())
  .pipe(gulp.dest('dist'))
})

gulp.task('img', () => {
  return gulp.src(paths.img)
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
})

gulp.task('clean', ['babel', 'js'], () => {
  return gulp.src('tmp')
  .pipe(clean())
})

gulp.task('watch', () => {
  gulp.watch(paths.js, ['babel', 'js', 'clean'])
  gulp.watch(paths.sass, ['sass'])
  gulp.watch(paths.img, ['img'])
})

gulp.task('default', ['babel', 'js', 'clean', 'sass', 'img', 'watch'])
