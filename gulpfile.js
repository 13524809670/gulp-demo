var gulp = require('gulp');
var stylus = require('gulp-stylus');
var gutil = require('gulp-util');


// 浏览器兼容自动处理
var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];


gulp.task('default',  ['watch']);


// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./styl/**/*', ['styl']);
});

gulp.task('styl',function(){

    gulp.src('./styl/*.styl')
        .pipe(stylus({
            compress:true
            //false|true
        }).on('error',gutil.log))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'));

})