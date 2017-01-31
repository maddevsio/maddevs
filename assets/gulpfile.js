var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


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


gulp.task('scripts', function() {
		var scripts = [
				'js/jquery-3.1.0.min.js',
				'js/TimelineMax.min.js',
				'js/ScrollMagic.min.js',
				'js/scripts.js'
		];
		return gulp.src(scripts)
				.pipe(concat('scripts.js'))
				.pipe(gulp.dest('prod'));

});

gulp.task('watch', function() {
		gulp.watch('css/*.scss', ['css']);
		gulp.watch('js/*.js', ['scripts'])
});

gulp.task('default', ['сss', 'watch']);
