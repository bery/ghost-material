'use strict';

var gulp = require('gulp');  
var sass = require('gulp-sass');
//var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

//style paths
var sassFiles = 'assets/sass/**/*.scss',  
    cssDest = 'assets/css/';
var jsFiles = 'assets/scripts/**/*.js',  
    jsDest = 'assets/js';

    gulp.task('styles', function(){  
        gulp.src(sassFiles)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
    });

    gulp.task('watch',function() {  
        gulp.watch(sassFiles,['styles']);
    });

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        //.pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        //.pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});
