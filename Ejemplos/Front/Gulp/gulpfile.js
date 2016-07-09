var gulp = require('gulp');
var uglify = require('gulp-uglify');
var nodemon =require('gulp-nodemon');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');

gulp.task('browserify', function() {
  return browserify('./source/scripts/app.main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function() {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

// Others Tasks

gulp.task('watch', function() {
  gulp.watch('./source/scripts/*.js', ['browserify'])
  gulp.watch('./source/scss/**/*.scss', ['sass']);
  return;
});

gulp.task('build', function() {
  gulp.start(['browserify', 'sass']);
  return;
});

gulp.task('server', function() {
  nodemon({
    script: './index.js'
  });
});

// Runner

gulp.task('default', function() {
  gulp.start(['build', 'watch', 'server']);
  return;
});