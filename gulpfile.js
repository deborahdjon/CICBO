const gulp = require('gulp');
const { src, dest, series } = require("gulp");
const eslint = require("gulp-eslint");
const fs = require('fs');

// Copy the css files in the right folder
gulp.task('copyCss', (resolve)=>{
  var files = fs.readdirSync('./src/assets/css_from_less');
  files.forEach(function (file){

    /**
     * Build
     * minify
     *
     */



    //   // Push new file
    //   gulp.src('src/assets/css_from_less/'+file)
    //     .pipe(gulp.dest('src/app/'));
    // }

    //
    //   const folder_name = file.replace('.component.css', '');
    //   gulp.src('src/assets/css_from_less/*.css')
    //     .pipe(gulp.dest('src/app/'+folder_name));
    //   console.log("nahhh");
    //
    // }
  })
  resolve();
});
function runLinter(cb) {
  return src(['**/*.js', '**/*.ts', '*.js', '*.ts', '!node_modules/**', '!dist/**', '!bin/**', '!e2e', '!public'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('end', () => {
      console.log("\n\u001b[32m [V] Found no errors or warnings: passed\u001b[0m");
      cb();
    });
}

exports.lint = runLinter;

// Default Task
//gulp.task('default', gulp.parallel('copyCss','watch'));
