var gulp = require('gulp');
var responsive = require('gulp-responsive');
var es = require('event-stream');

gulp.task('default', function () {
  return es.concat(
    gulp.src('src-images/events/1-21-17-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/1-21-17-CRASH')),
    gulp.src('src-images/events/1-8-17-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/1-8-17-CRASH')),
    gulp.src('src-images/events/12-4-16-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/12-4-16-CRASH')),
    gulp.src('src-images/events/11-6-16-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/11-6-16-CRASH')),
  	gulp.src('src-images/events/10-15-16-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/10-15-16-CRASH')),
	gulp.src('src-images/events/9-17-16-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/9-17-16-CRASH')),
	gulp.src('src-images/events/10-2-16-CRASH/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/10-2-16-CRASH')),
	gulp.src('src-images/events/STEM-Ben-Academy/*.jpg')
		.pipe(responsive({
		  '*.jpg': {
		    width: 1100,
		    height: 733,
		    max: true,
		    rotate: true,
		  },
		  '*': {
		    width: 160,
		    height: 107,
		    max: true,
		    rotate: true,
		    rename: { suffix: '-thumbnail' },
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/events/STEM-Ben-Academy')),
	gulp.src('src-images/banner.jpg')
		.pipe(responsive({
		  'banner.jpg': {
		    width: 1500,
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/')),
	gulp.src('src-images/man.jpg')
		.pipe(responsive({
		  'man.jpg': {
		    width: 200,
		  },
		}, {
		  quality: 70,
		  progressive: true,
		  withMetadata: false,
		}))
		.pipe(gulp.dest('web/images/'))
	);
});
