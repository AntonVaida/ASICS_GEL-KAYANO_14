const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Компіляція SCSS у CSS
gulp.task('styles', function () {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Мінімізація JavaScript
gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Налаштування Live Reload
gulp.task('serve', function () {
    browserSync.init({
        server: './src',
        port: 4000
    });

    gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('src/scripts/**/*.js').on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

// Завдання за замовчуванням
gulp.task('default', gulp.parallel('styles', 'scripts', 'serve'));