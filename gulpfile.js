var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});


// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./styl/**/*', ['styl']);
});

gulp.task('styl',function(){

    gulp.src('./styl/*.styl')
        .pipe(stylus({
            compress:false
            //false|true
        }))
        .pipe(gulp.dest('./build/css'));

})