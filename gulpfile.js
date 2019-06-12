var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browsersync = require('browser-sync');
var reload = browsersync.reload;

// compile sass
gulp.task('compile-sass', function() {
	return gulp
		.src('src/sass/style.scss')
		.pipe(sass()) //gulp-sass compiles sass to css
		.pipe(minify())
		.pipe(gulp.dest('./')) //where to output final file
		.pipe(browsersync.stream());
});

// compile js
gulp.task('scripts', function() {
	return gulp
		.src('src/js/**/*.js')
		.pipe(uglify()) //minify js
		.pipe(concat('scripts.js')) //combine all scripts into one file
		.pipe(gulp.dest('dist/js/'))
		.pipe(browsersync.stream());
});

//live reload
gulp.task('browser-sync', function() {
	browsersync.init({
		proxy: 'gulp-wp.dev',
	});
});

gulp.task('reload', function() {
	browsersync.reload();
});

//gulp task
gulp.task('run', function() {
	//sass
	gulp.watch('src/sass/**/*.scss', function(event) {
		gulp.run('compile-sass');
	});
	//js
	gulp.watch('src/js/**/*.js', function(event) {
		gulp.run('scripts');
	});
	// pages
	gulp.watch(['*.html', '*.php'], ['reload']);
});
