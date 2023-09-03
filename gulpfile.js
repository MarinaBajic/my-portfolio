const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
// const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

gulp.task('taskCSS', async () => {
    return gulp.src([
        './dev/main.scss'
    ])
        .pipe(concat('dist.main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'))
});

// gulp.task('taskJS', async () => {
//     return gulp.src([
//         './dev/main/read-faq.js',
//         './dev/main/read-project-cards.js',
//         './dev/**/*.js'
//     ])
//         .pipe(concat('dist.main.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist/js/'))
// });

gulp.task('watch', async () => {
    gulp.watch('./dev/**/*.scss', gulp.series('taskCSS'));
    // gulp.watch('./dev/**/*.js', gulp.series('taskJS'));
});