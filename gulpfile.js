var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassModuleImporter = require('sass-module-importer');
    watch = require('gulp-watch'),
    // bootstrap=require('bootstrap'),
    // concat=require('concat');
    browserSync = require('browser-sync');
    // concat       = require('gulp-concat'),
	// uglify       = require('gulp-uglify');

gulp.task('styles', function() {
    return gulp.src('./app/assets/sass/**/*.scss')
        .pipe(sass({ importer: sassModuleImporter() }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
// gulp.task('scripts', function() {
// 	return gulp.src([
// 		'./app/assets/libs/modernizr/modernizr.js',
// 		'./app/assets/libs/jquery/jquery-1.11.2.min.js',
// 		'./app/assets/libs/waypoints/waypoints.min.js',
// 		'./app/assets/libs/animate/animate-css.js',
// 		'./app/assets/libs/Magnific-Popup/jquery.magnific-popup.min.js',
// 		'./app/assets/libs/animateNumber/jquery.animateNumber.min.js',
// 		'./app/assets/libs/equalHeights/equalHeights.min.js',
// 		'./app/assets/libs/owl-carousel/owl.carousel.min.js',
// 		'./app/assets/libs/selectize/dist/js/standalone/selectize.min.js',
// 		])
// 		.pipe(concat('main.js'))
// 		// .pipe(uglify()) //Minify libs.js
// 		.pipe(gulp.dest('./app/temp/scripts'));
// });
// gulp.task('scripts', function() {
//     return gulp.src([ 
//         'app/libs/*.js' 
//         ])
//         // .pipe(concat('libs.min.js')) 
// // .pipe(uglify()) 
//         .pipe(gulp.dest('assets/js')); 
// });


gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },

        notify: false
    });

    watch('./app/*.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/sass/**/*.scss', function() {
        gulp.start('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
})
gulp.task('default',['styles','watch','cssInject']);