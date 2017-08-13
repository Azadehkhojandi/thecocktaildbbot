var gulp = require('gulp');

gulp.task('default', function() {
  
   gulp.src('./package.json')
    .pipe(gulp.dest('./dest'));

     gulp.src('./function.json')
    .pipe(gulp.dest('./dest'));

     gulp.src('.env')
    .pipe(gulp.dest('./dest'));
});