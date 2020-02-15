const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

gulp.task("css", function() {
  return gulp
    .src("./assets/sass/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./_includes/css"));
});

gulp.task("js", function() {
  return gulp.src("./assets/js/**/*.js").pipe(gulp.dest("./_includes/js"));
});

/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch("./assets/sass/**/*.scss", gulp.parallel("css"));
  gulp.watch("./assets/js/**/*.js", gulp.parallel("js"));
});

/*
  Let's build this sucker.
*/
gulp.task("build", gulp.parallel("css", "js"));
