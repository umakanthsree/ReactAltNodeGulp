/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
    sourcemaps = require('gulp-sourcemaps');
    concat = require('gulp-concat');
	minifyCSS = require('gulp-minify-css');
	rename = require('gulp-rename');

// create a default task and just log a message
// gulp.task('default', function(){
// return gutil.log('gulp running');
// });

// gulp.task('default', ['build-css']);

gulp.task('vendor', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'
  ]).pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

// gulp.task('build-css',function(){
// 	return gulp.src('views/*.css')
// 		.pipe(minifyCSS())
// 		.pipe(concat("main.css"))
// 		// .pipe(rename('main.css'))
// 		.pipe(gulp.dest('gulpdest/'));
// });

gulp.task('styles', function() {
  return gulp.src('app/stylesheets/main.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/stylesheets/**/*.css', ['styles']);
});

gulp.task('default', function() {
  gulp.run('vendor');
	gulp.task('watch', function() {
	  gulp.watch('app/stylesheets/**/*.css', ['styles']);
	});
});