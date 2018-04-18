var gulp   = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass   = require('gulp-sass');

gulp.task('build-css', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['build-css']);
