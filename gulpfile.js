var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('sass:watch', function () {
  gulp.watch('app/sass/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('sass:watch'))
