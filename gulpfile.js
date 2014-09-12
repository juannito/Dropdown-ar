// Install gulpjs.com
// Para que funcione esto hay que instalar NODE http://nodejs.org/

var gulp = require('gulp');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css'),

gulp.task('default', function() {
  // place code for your default task here
    watch('css/**/*.css').pipe(gulp.dest('./dist/'));
});