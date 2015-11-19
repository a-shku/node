var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	minifyCss = require('gulp-minify-css');
	
 
 //server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
}); 
 
 //CSS
gulp.task('css', function () {
  return gulp.src('css/**/*.css')
    .pipe(concatCss('css/bundle.css'))
	.pipe(autoprefixer({browsers: ['last 2 version', '> 1%', 'ie 9']}))
	.pipe(gulp.dest('app/'))
	.pipe(plumber())
	
	.pipe(minifyCss())
	.pipe(rename('css/min/bundle.min.css'))
    .pipe(gulp.dest('app/'))
	.pipe(livereload())
	.pipe(connect.reload())
})


//html
gulp.task('html', function(){
	gulp.src('app/index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function () {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('add/index.html', ['html'])
})
	
//default
gulp.task('default', ['connect', 'css', 'html', 'watch']);	




	
	