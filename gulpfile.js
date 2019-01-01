// 'use strict';

// const gulp = require('gulp'),
// 			plumber = require('gulp-plumber'),
// 			notify = require("gulp-notify"),
// 			watch = require('gulp-watch'),
// 			//pug
// 			pug = require('gulp-pug'),
// 			//html
// 			htmlmin = require('gulp-htmlmin'),
// 			//style
// 			sass = require('gulp-sass'),
// 			autoprefixer = require('gulp-autoprefixer'),
// 			sourcemaps = require('gulp-sourcemaps'),
// 			//js
// 			babel = require('gulp-babel'),
// 			concat = require('gulp-concat'),
// 			uglify = require('gulp-uglify'),
// 			//img
// 			imagemin = require('gulp-imagemin'),
// 			cache = require('gulp-cache'),
// 			pngquant = require('imagemin-pngquant'),
// 			optipng = require('imagemin-optipng'),
// 			mozjpeg = require('imagemin-mozjpeg'),
// 			jpegtran = require('imagemin-jpegtran'),
// 			svgo = require('imagemin-svgo'),
// 			//clean
// 			clean = require('gulp-clean'),
// 			del = require('del'),
// 			//browserSync
// 			browserSync = require('browser-sync'),
// 			reload = browserSync.reload
// ;

		
// const path = {
// 	build: { //Тут мы укажем куда складывать готовые после сборки файлы
// 			html: 'build/',
// 			js: 'build/js/',
// 			css: 'build/css/',
// 			img: 'build/img/',
// 			fonts: 'build/fonts/'
// 	},
// 	src: { //Пути откуда брать исходники
// 			pug: 'src/pug/**/*.pug', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
// 			html: 'src/html/*.html',
// 			js: 'src/js/script.js',//В стилях и скриптах нам понадобятся только main файлы
// 			style: 'src/style/style.scss',
// 			img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
// 			fonts: 'src/fonts/**/*.*'
// 	},
// 	watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
// 			pug: 'src/**/*.pug',
// 			html: 'src/**/*.html',
// 			js: 'src/js/**/*.js',
// 			style: 'src/style/**/*.scss',
// 			img: 'src/img/**/*.*',
// 			fonts: 'src/fonts/**/*.*'
// 	},
// 	clean: './build'
// }; 

// const config = {
// 	server: {
// 			baseDir: './build'
// 	},
// 	tunnel: true,
// 	host: 'localhost',
// 	port: 4200,
// };


// gulp.task('pug:build', () => {
// 	gulp.src(path.src.pug) //Выберем файлы по нужному пути
// 			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
// 			.pipe(pug({pretty: true}))
// 			.pipe(gulp.dest(path.src.html)) //Выплюнем их в папку build
// 			.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
// });

// gulp.task('html:build', () => {
// 	gulp.src(path.src.html)
// 			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
// 			.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
// 			.pipe(gulp.dest(path.build.html))
// 			.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
// });

// gulp.task('js:build', () => {
// 	gulp.src(path.src.js) //Найдем наш main файл
// 			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))	
// 			.pipe(sourcemaps.init()) //Инициализируем sourcemap
// 			.pipe(babel({presets: ['env']}))
// 			.pipe(uglify()) //Сожмем наш js
// 			.pipe(concat('script.js'))
// 			.pipe(sourcemaps.write()) //Пропишем карты
// 			.pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
// 			.pipe(reload({stream: true})); //И перезагрузим сервер
// });

// gulp.task('style:build', () => {
// 	gulp.src(path.src.style) //Выберем наш main.scss
// 			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))		
// 			.pipe(sourcemaps.init()) //То же самое что и с js
// 			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))	//Скомпилируем
// 			.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false})) //Добавим вендорные префиксы
// 			.pipe(sourcemaps.write())
// 			.pipe(gulp.dest(path.build.css)) //И в build
// 			.pipe(reload({stream: true}));
// });

// gulp.task('image:build', () => {
// 	gulp.src(path.src.img) //Выберем наши картинки
// 			.pipe(cache(imagemin( //Сожмем их
// 				[
// 					pngquant(),
// 					optipng({progressive: true}),

// 					mozjpeg({progressive: true}),
// 					jpegtran(),

// 					svgo({removeViewBox: false})

// 				],{verbose: true}
// 			)))
// 			.pipe(gulp.dest(path.build.img)) //И бросим в build
// 			.pipe(reload({stream: true}));
// });

// //cache clear
// gulp.task('clear', () => {
// 	cache.clearAll();
// })

// gulp.task('fonts:build', function() {
// 	gulp.src(path.src.fonts)
// 			.pipe(gulp.dest(path.build.fonts))
// });

// gulp.task('build', [
// 	'pug:build',
// 	'html:build',
// 	'js:build',
// 	'style:build',
// 	'fonts:build',
// 	'image:build'
// ]);


// gulp.task('watch', function(){
// 	watch([path.watch.pug], function(event, cb) {
// 			gulp.start('pug:build');
// 	});

// 	watch([path.watch.html], function(event, cb) {
// 		gulp.start('html:build');
// 	});

// 	watch([path.watch.style], function(event, cb) {
// 			gulp.start('style:build');
// 	});
// 	watch([path.watch.js], function(event, cb) {
// 			gulp.start('js:build');
// 	});
// 	watch([path.watch.img], function(event, cb) {
// 			gulp.start('image:build');
// 	});
// 	watch([path.watch.fonts], function(event, cb) {
// 			gulp.start('fonts:build');
// 	});
// });

// gulp.task('webserver', () => {
// 	browserSync(config);
// });

// gulp.task('default', ['build', 'webserver', 'watch']);

// //clean
// gulp.task('clean', () => {
// 	gulp.src('prod', {read: false})
// 			.pipe(clean());
// });

// //del
// gulp.task('del', () => {
// 	del.sync('prod');
// });














// // //libs
// // gulp.task('libs', () => {
// // 	gulp.src(['dev/libs/**/*.css', 'dev/libs/**/*.png'])
// // 			.pipe(gulp.dest('prod/libs/'))			
// // 			.pipe(reload({stream:true}));
// // });

// // //favicon
// // gulp.task('favicon', () => {
// // 	gulp.src('dev/favicon/**/*.*')
// // 			.pipe(gulp.dest('prod/img/favicon/'))			
// // 			.pipe(reload({stream:true}));
// // });


// // //fonts
// // gulp.task('fonts', () => {
// //     gulp.src('dev/fonts/**/*.*')
// //         .pipe(gulp.dest('prod/fonts'))
// // });

// // //html
// // gulp.task('html', () => {
// // 	gulp.src('dev/html/**/*.*')
// // 			.pipe(gulp.dest('prod/html'))
// // });

// // //js
// // const babel = require('gulp-babel');
// // const concat = require('gulp-concat');
// // const uglify = require('gulp-uglify');

// // gulp.task('js', () => {
// // 	gulp.src(['dev/js/*.js'])
// // 			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))	
// // 			.pipe(sourcemaps.init())	
// // 			.pipe(babel({presets: ['env']}))
// // 			.pipe(uglify())	
// // 			.pipe(concat('script.js'))
// // 			.pipe(sourcemaps.write())
// // 			.pipe(gulp.dest('prod/js'))
// // 			.pipe(reload({stream:true}));
// // });

// // //watcher
// // gulp.task('watcher', () => {
// // 	gulp.watch('dev/**/*.html', ['template']);

// // 	gulp.watch('dev/**/*.html', ['pages']);

// // 	gulp.watch('dev/**/*.pug', ['pug']);

// // 	gulp.watch('dev/style/**/*.scss', ['style']);

// // 	gulp.watch('dev/js/**/*.js', ['js']);

// // 	gulp.watch('dev/img/**/*', ['image']);

// // 	gulp.watch('dev/fonts/**/*', ['fonts']);
// // });

// // // default
// // gulp.task('default',
// // 	['template',
// // 	 'pages',
// // 	 'pug',
// // 	 'style',
// // 	 'js',
// // 	 'image',
// // 	 'favicon',
// // 	 'fonts',
// // 	 'libs'
// // 	]);

// // gulp.task('dev', ['default', 'watcher', 'browserSync']);












const gulp = require('gulp');

const gutil = require('gulp-util');

const plumber = require('gulp-plumber');

const notify = require("gulp-notify");

const browserSync = require('browser-sync');
const reload = browserSync.reload;

//browserSync 
gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: './prod'
		},
		tunnel: true,
	});
});



//pug
const pug = require('gulp-pug');
gulp.task('pug', () => {
	gulp.src('dev/pug/*.pug')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(pug({pretty: true}))
			.pipe(gulp.dest('dev/html'))
			.pipe( reload({stream: true}) );
});



//html
const htmlmin = require('gulp-htmlmin');
gulp.task('html', () => {
	gulp.src('dev/html/*.html')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
			.pipe(gulp.dest('prod'))
});



//style
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style', () => {
	gulp.src('dev/style/style.scss')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))		
			.pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.init() )
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))			
			.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
			.pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write() )
			.pipe(gulp.dest('prod/css'))
			.pipe( reload({stream: true}));
});



//js
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
	gulp.src([
			'dev/libs/jquery/jquery-3.3.1.min.js',			
			'dev/libs/wow/wow.min.js',
			'dev/libs/slick/slick.min.js',
			'dev/libs/particles/particles.min.js',
			'dev/libs/isotope/isotope.pkgd.min.js',
			'dev/js/*.js'
		])
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))	
			.pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.init() )
			.pipe(uglify())	
			.pipe(concat('script.js'))
			.pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write() )
			.pipe(gulp.dest('prod/js'))
			.pipe( reload({stream: true}) );
});



//image
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const pngquant = require('imagemin-pngquant');
const optipng = require('imagemin-optipng');

const mozjpeg = require('imagemin-mozjpeg');
const jpegtran = require('imagemin-jpegtran');

const svgo = require('imagemin-svgo');

gulp.task('image', () => {
		gulp.src('dev/img/**/*.*')

		.pipe(cache(imagemin(
			[

				pngquant(),
				optipng({progressive: true}),

				mozjpeg({progressive: true}),
				jpegtran(),

				svgo({removeViewBox: false})


			],{verbose: true}
		)))

		.pipe(gulp.dest('prod/img/'));

});

//cache clear
gulp.task('clear', () => {
	cache.clearAll();
})

//favicon
gulp.task('favicon', () => {
	gulp.src('dev/favicon/**/*.*')
			.pipe(gulp.dest('prod/favicon/'))
});

//libs
gulp.task('libs', () => {
	gulp.src(['dev/libs/**/*.*','!dev/libs/**/*.js'])
			.pipe(gulp.dest('prod/libs/'))
});

//fonts
gulp.task('fonts', () => {
    gulp.src('dev/fonts/**/*.*')
        .pipe(gulp.dest('prod/fonts'))
});

//videos
gulp.task('video', () => {
	gulp.src('dev/video/**/*.*')
			.pipe(gulp.dest('prod/video'))
});


// default
gulp.task('default', ['pug', 'html', 'style', 'js', 'image', 'favicon', 'fonts', 'video', 'libs', 'del']);

gulp.task('dev', ['default', 'watcher', 'browserSync']);

//watcher
gulp.task('watcher', () => {
	gulp.watch('dev/**/*.pug', ['pug']);

	gulp.watch('dev/**/*.html', ['html']);

	gulp.watch('dev/style/**/*.scss', ['style']);

	gulp.watch('dev/js/**/*.js', ['js']);

	gulp.watch('dev/img/**/*', ['image']);

	gulp.watch('dev/favicon/**/*', ['favicon']);
	
	gulp.watch('dev/fonts/**/*', ['fonts']);

	gulp.watch('dev/video/**/*', ['video']);
});


//clean
const clean = require('gulp-clean');
gulp.task('clean', () => {
	gulp.src('prod', {read: false})
			.pipe(clean());
});


//del
const del = require('del');
gulp.task('del', () => {
	del.sync('prod');
});
