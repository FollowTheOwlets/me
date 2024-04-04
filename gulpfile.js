const gulp = require('gulp');
const minify = require('gulp-minify');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

gulp.task('pug', () => {
    return gulp
        .src('./pug/index.pug')
        .pipe(
            pug({
                pretty: true,
            }),
        )
        .pipe(gulp.dest('./'));
});

gulp.task('sass', () => {
    return gulp
        .src('./src/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./out'));
});

gulp.task('js', () => {
    return gulp
        .src('./src/index.js')
        .pipe(
            minify({
                ext: {
                    min: '.js',
                },
                noSource: true,
            }),
        )
        .pipe(gulp.dest('./out'));
});

gulp.task('default', gulp.series('pug', 'sass', 'js'));
