const gulp = require('gulp')
const babel = require('gulp-babel');

const source_path = ["src/*.js"]

function watchJS (cb){
    gulp.src(source_path)
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(gulp.dest("public",{ overwrite: true }))
    cb()
}

exports.watch = function (){
    gulp.watch(source_path,  { events:'all', ignoreInitial: false  }, gulp.series(watchJS))
}