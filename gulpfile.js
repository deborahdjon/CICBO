const gulp = require('gulp');
var fs = require('fs');

// Copy the css files in the right folder
gulp.task('copyCss', (resolve)=>{
  var files = fs.readdirSync('./src/assets/css_from_less');
  files.forEach(function (file){




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






// Default Task
gulp.task('default', gulp.parallel('copyCss','watch'));






