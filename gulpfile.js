var gulp = require('gulp');
var concatCss = require('gulp-concat-css'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),
	minifyCss = require('gulp-minify-css');

//server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
	
//scss	
gulp.task('scss', function(){
   gulp.src('scss/style.scss')
   .pipe(sass())
    
	.pipe(autoprefixer({browsers: ['last 3 version', '> 1%', 'ie 9']}))
	.pipe(gulp.dest('app/scss-to-css/'))
	.pipe(livereload())
	.pipe(connect.reload())
	
})

//scss-small	
gulp.task('scss-small', function(){
   gulp.src('scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({browsers: ['last 3 version', '> 1%', 'ie 9']}))
	.pipe(gulp.dest('app/scss-to-css/'))
	.pipe(livereload())
	.pipe(connect.reload())
	
})
	
	
//css	
gulp.task('css', function(){
   gulp.src('./css/**/*.css')
   
    .pipe(concatCss('css/bundle.css'))
	.pipe(autoprefixer({browsers: ['last 2 version', '> 1%', 'ie 9']}))
	.pipe(gulp.dest('app/'))
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
gulp.task('watch', function(){
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/index.html', ['html'])
	gulp.watch('scss/style.scss', ['scss'])
	gulp.watch('scss/small.scss', ['scss-small'])
})

//default
gulp.task('default', ['connect', 'css', 'scss', 'scss-small', 'html', 'watch']);






