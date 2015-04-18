var gulp  = require('gulp');
var uncss = require('gulp-uncss');
var csso  = require('gulp-csso');
var run   = require('gulp-run');


// Start the Middleman server to load pages
gulp.task('server', function() {
  run('middleman server').exec();
});

gulp.task('default', function() {
  // place code for your default task here
});
