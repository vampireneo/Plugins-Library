var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');

gulp.task('server', function() {
  connect.server({
    livereload: true,
  });
});

gulp.task('html', function () {
  gulp.src(['*.html', '*.json', 'js/*.js', 'style/*.css'])
      .pipe(watch(['*.html', '*.json', 'js/*.js', 'style/*.css']))
      .pipe(connect.reload());
});

gulp.task('default', ['html', 'server']);