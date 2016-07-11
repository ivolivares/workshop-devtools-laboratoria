var gulp = require('gulp');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sass = require('gulp-sass');

gulp.task('browserify', function() { // browserify == nombre de la tarea.
  return browserify('./source/scripts/app.main.js') // Acá transpilamos con Browserify
    .bundle() // Guardo en memoria
    .pipe(source('main.js')) // Defino el nombre del nuevo archivo
    .pipe(buffer()) // Guardo en memoria
    .pipe(uglify()) // Minifico
    .pipe(gulp.dest('./public/js')); // Envio a "destino final"
});

gulp.task('sass', function() {
  return gulp.src('./source/scss/*.scss') // tomamos el src (source == origen)
    .pipe(sass()) // transpilamos a CSS desde SASS
    .pipe(gulp.dest('./public/css')); // Enviarlo a "destino final"
});

// Others Tasks

gulp.task('watch', function() { // definimos el watch
  // gulp.watch == primer parámetro: archivos a mirar, segundo parámetro: tareas a ejecutar cuando hay cambios
  gulp.watch('./source/scripts/*.js', ['browserify']);
  gulp.watch('./source/scss/**/*.scss', ['sass']);
  return;
});

gulp.task('build', function() { // Constructor
  gulp.start(['browserify', 'sass']); // Inicia "N" tareas entregadas en el array
  return;
});

gulp.task('server', function() { // levanta un server node
  nodemon({
    script: './index.js' // indicamos el archivo que va a ejecutar nodemon
  });
});

// Runner

gulp.task('default', function() { // tarea por defecto del task runner
  gulp.start(['build', 'watch', 'server']); // ejecuto 3 tareas a la vez
  return;
});