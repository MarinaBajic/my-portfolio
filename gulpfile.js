function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask;

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
// const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

gulp.task('taskCSS', async () => {
    return gulp.src([
        // './dev/abstracts/_breakpoints.scss',
        // './dev/abstracts/_colors.scss',
        // './dev/abstracts/_mixins.scss',
        // './dev/abstracts/_typography.scss',
        // './dev/abstracts/_variables.scss',
        // './dev/base/_general.scss',
        // './dev/base/_reset.scss',
        // './dev/components/_buttons.scss',
        // './dev/components/_card.scss',
        // './dev/components/_headings.scss',
        // './dev/components/_image-with-text-module.scss',
        // './dev/components/_navigation.scss',
        // './dev/components/_signature.scss',
        // './dev/components/_socials.scss',
        // './dev/layout/_grid.scss',
        // './dev/layout/_header.scss',
        // './dev/layout/_sections.scss',
        // './dev/pages/landing-page.scss'
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