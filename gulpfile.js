/*

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var cache       = require('gulp-cache');
var concat      = require('gulp-concat');
var header      = require('gulp-header');
var pixrem      = require('gulp-pixrem');
var minifyhtml  = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var util        = require('gulp-util');

/*

FILE PATHS
==========
*/

var themeDir = 'content/themes/light';
var sassSrc = themeDir + '/sass/**/*.{sass,scss}';
var sassFile = themeDir + '/sass/base/global.scss';
var cssDest = themeDir + '/css';
var customjs = themeDir + '/js/scripts.js';
var jsSrc = themeDir + '/js/src/**/*.js';
var jsDest = themeDir + '/js';
var phpSrc = [themeDir + '/**/*.php', !'vendor/**/*.php'];

/*

ERROR HANDLING
==============
*/

var handleError = function(task) {
  return function(err) {

      notify.onError({
        message: task + ' failed, check the logs..'
      })(err);

    util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
  };
};

/*

BROWSERSYNC
===========
*/

gulp.task('browsersync', function() {

  var files = [
    themeDir + '/**/*.php',
    jsSrc
  ];

  browserSync.init(files, {
    proxy: "pulina.test",
    browser: "Chromium",
    notify: true
  });

});


/*

STYLES
======
*/

gulp.task('styles', function() {

  gulp.src(sassFile)

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'compressed',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        themeDir + '/node_modules/',
        'node_modules/',
        // 'bower_components/',
        // require('node-bourbon').includePaths
      ],
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(pixrem())
    .pipe(minifycss({
      advanced: true,
      keepBreaks: false,
      keepSpecialComments: 0,
      mediaMerging: true,
      sourceMap: true
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());

});


/*

SCRIPTS
=======
*/


var currentDate   = util.date(new Date(), 'dd-mm-yyyy HH:ss');
var pkg       = require('./package.json');
var banner      = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

gulp.task('js', function() {

      gulp.src(
        [
          themeDir + '/js/src/jquery.js',
          themeDir + '/js/src/prism.js',
          themeDir + '/js/src/skrollr.js',
          themeDir + '/js/src/navigation.js',
          themeDir + '/js/src/waypoints.js',
          themeDir + '/js/src/jquery.mb.YTPlayer.js',
          'node_modules/what-input/dist/what-input.js',
          themeDir + '/js/src/scripts.js'
        ])
        .pipe(concat('all.js'))
        // .pipe(uglify({
        //   compress: true,
        //   mangle: true}).on('error', function(err) {
        //     util.log(util.colors.red('[Error]'), err.toString());
        //     this.emit('end');
        //   }))
        .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
        .pipe(gulp.dest(jsDest));
});


/*

WATCH
=====

*/

// Run the JS task followed by a reload
gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('watch', ['browsersync'], function() {

  gulp.watch(sassSrc, ['styles']);
  gulp.watch(jsSrc, ['js-watch']);

});
