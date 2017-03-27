var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

// 压缩图片
gulp.task('img', function() {
	return gulp.src('src/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngcrush()]
		}))
		.pipe(gulp.dest('dist/images'))
		.pipe(notify({
			message: 'img task ok'
		}));
});

// 合并、压缩、重命名css
gulp.task('css', function() {
	return gulp.src('src/css/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(notify({
			message: 'css task ok'
		}));
});

// 合并、压缩js文件
gulp.task('js', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({
			message: 'js task ok'
		}));
});

// 默认任务
gulp.task('default', function() {

	gulp.run('img', 'css', 'js');

	// Watch .css files
	gulp.watch('src/css/*.css', ['css']);

	// Watch .js files
	gulp.watch('src/js/*.js', ['js']);

	// Watch image files
	gulp.watch('src/images/*', ['img']);
});