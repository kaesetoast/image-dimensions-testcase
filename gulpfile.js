var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssImageDimensions = require('gulp-css-image-dimensions');

gulp.task('css', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(cssImageDimensions('../images'))
		.pipe(sass())
		.pipe(gulp.dest('css'));
});