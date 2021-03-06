var gulp 		= require('gulp');
var minifyCss 	= require('gulp-minify-css');
var concat 		= require('gulp-concat');
var uglify 		= require('gulp-uglify');
var watch 		= require('gulp-watch');
var less 		= require('gulp-less');

gulp.task('css', function() {
	return gulp.src('./static/css/theme.less')
		.pipe(less())
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(concat('dist.css'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('css-resume', function() {
	return gulp.src('./static/css/resume.css')
		.pipe(concat('resume.css'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('js', function () {
	return gulp.src('./static/js/main.js')
		.pipe(uglify())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('js-resume', function () {
	return gulp.src('./static/js/resume.js')
		.pipe(uglify())
		.pipe(concat('resume.js'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./static/css/**/*.less'], ['css']);
    gulp.watch(['./static/js/**/*.js'], ['js']);
});
