const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// compile sass task
function style() {
  return gulp.src('./src/sass/**/*.scss') // find scss file
    .pipe(sass()) // pass through scss compiler
    .pipe(cleanCSS({compatibility: 'ie8'})) // minify
    .pipe(gulp.dest('./styles')) // save compiled css
    .pipe(browserSync.stream());
}

// watch task
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/sass/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
  //watch sass, html and js files for changes and reload
}


exports.style = style;
exports.watch = watch;

