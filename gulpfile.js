const {src, dest, parallel, series, watch} = require('gulp'); // Подключаем Gulp
let browserSync = require('browser-sync').create(),// Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    concat = require('gulp-concat'),// Подключаем библиотеку для конконтенации жс
    uglify = require('gulp-uglify'),// Подключаем библиотеку для конконтенации жс в одну строку
    sass = require('gulp-sass'),// Подключаем библиотеку для перевода с сасс в ccs
    cleancss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),// Подключаем библиотеку для минимизации картинок
    newer = require('gulp-newer');// Подключаем библиотеку для проверки наличии оптемезированых картинок


function browsersync() { // запускаем сервер
    browserSync.init({
        server: {baseDir: 'src/'},
        online: true  // позволяет работать без инета,если false
    })
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.min.js', // если есть квери,засовываем в один файл с нашим жс
        "src/js/script.js",
    ])
        .pipe(concat('src.min.js'))
        .pipe(uglify())
        .pipe(dest('src/js/'))
        .pipe(browserSync.stream())
}
function styles() {
    return src([
        'node_modules/normalize.css/normalize.css',
        'src/scss/*.scss'
        ])
        .pipe(sass({}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
        .pipe(cleancss(( { level: { 1: {specialComments: 0} } /*,format: 'beautify'*/  } ))) // format: 'beautify' для подного кода
        .pipe(dest('src/css/'))
        .pipe(browserSync.stream())
}
function images() {
    return src('src/img/src/**/*')
        .pipe(newer('src/img/dest/'))  // проверяет есть ли уже картинки
        .pipe(imagemin())
        .pipe(dest('src/img/dest/'))
}


function startwatch(){
    watch('src/**/*.scss',styles);
    watch([
        'src/**/*.js',
        '!src/**/*.min.js'],        // не вотчит за файлами мин жс
        scripts
    );
    watch('src/**/*.html').on('change', browserSync.reload)
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;


exports.default = parallel(styles, scripts, browsersync, startwatch);