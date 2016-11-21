var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
var sass = require('gulp-sass');

gulp.task('css', function () {
		var processors = [
				autoprefixer,
				cssnano(),
				precss
		];
		return gulp.src('css/styles.scss')
				.pipe(sass().on('error', sass.logError))
				.pipe(postcss(processors))
				.pipe(gulp.dest('prod'));
});

gulp.task('watch', function() {
		gulp.watch('css/*.scss', ['css']);
});

gulp.task('default', ['сss', 'watch']);
