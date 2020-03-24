const gulp = require('gulp');
const rename = require('gulp-rename');
const del = require('del');
const exec = require('child_process').exec;


gulp.task('build-book', function(cb) {
    exec('gitbook build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('remove-md-from-book', function() {
    return del([
        `./_book/**/*.md`,
        './_book/**/.gitignore',
        './_book/gulpfile.js',
        './_book/package.json',
        './_book/package-lock.json',
        './_book/book-offline.json',
        './_book/book-online.json',
        './_book/preview.js'
      ]);
})

gulp.task('prepare-book-offline', function() {
    return gulp.src([`./book-offline.json`])
    .pipe(rename('book.json'))
    .pipe(gulp.dest('./'));
})

gulp.task('prepare-book-online', function() {
    return gulp.src([`./book-online.json`])
    .pipe(rename('book.json'))
    .pipe(gulp.dest('./'));
})

gulp.task('build', gulp.series('prepare-book-offline', 'build-book', 'remove-md-from-book'));
gulp.task('build-online', gulp.series('prepare-book-online', 'build-book', 'remove-md-from-book'));