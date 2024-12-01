const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const pugHtml = require('gulp-pug');
const babel = require('gulp-babel');
const webpack = require('webpack-stream'); 
const rev = require('gulp-rev');
const { main } = require('@popperjs/core');
const purgecss = require('gulp-purgecss')

const path = {
    style: {
        mainSass: './app/themes/engine/sass/main/**/*.sass',
        libsSass: './app/themes/engine/sass/libs/**/*.sass',
        bootsSass: './app/themes/engine/sass/boots/**/*.sass',
        app: './app/themes/engine/css/',
        dest: './dest/themes/engine/css/',
        appCss: './app/themes/engine/css/*.css'
    },
    script: {
        appJs: './app/themes/engine/js/*.js',
        appJson: './app/themes/engine/js/*.json',
        app: './app/themes/engine/js/',
        dest: './dest/themes/engine/js/',
        indexJs: './app/themes/engine/js/index.js',        
        libsJs: './app/themes/engine/js/libs/**/*.js'

    },
    img: {
        app: './app/images/**/*.*',
        dest: './dest/images/'
    }
};
function clean() {
    return del('./dest')
}
function delStyle(val){
    return del(path.style.app + 'build/'+ val + '*' +'.css')   
}
function pug() {
    return gulp.src('./app/themes/engine/pug/*.pug')                    
        .pipe(pugHtml({
            pretty: true
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());       
}
function styleMain(style, file){
    delStyle(style);
    return gulp.src(file)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 2 version']))
        .pipe(cleanCss({level: 2}))        
        .pipe(concat(style + '.css'))
        // .pipe(purgecss({
        //     content: ['app/*.html'],            
        // }))
        .pipe(gulp.dest(path.style.app))
        .pipe(rev())        
        .pipe(gulp.dest(path.style.app + 'build'))
        .pipe(rev.manifest({
            base: path.style.app + 'build', 
            merge: true            
        }))     
        .pipe(gulp.dest(path.style.app + 'build'))        
        .pipe(browserSync.stream());    
}
function bootsSass(){
    return styleMain('boots', path.style.bootsSass)
}
function styleSass(){
    return styleMain('main', path.style.mainSass)
}
function styleLibSass(){
    return styleMain('libs', path.style.libsSass)
}
function styles() {
    return gulp.src(path.style.appCss)        
        .pipe(gulp.dest(path.style.dest))        
        .pipe(rev())        
        .pipe(gulp.dest(path.style.dest + 'build'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dest/'));
}

function js() {
    return gulp.src([path.script.libsJs])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.script.app));
}

function jsWatch() {
    return gulp.src(path.script.indexJs)        
        .pipe(webpack({
            entry: {
                main: './app/themes/engine/js/index.js',
                slider: './app/themes/engine/js/slider.js',                
                gallery: './app/themes/engine/js/gallery.js',                
                wizardForm: './app/themes/engine/js/wizardForm.js',
            },
            output: {
                filename: '[name].bundle.js',
            },
            mode: 'production' 
        }))        
        .pipe(gulp.dest(path.script.app));
}

function scripts() {
    return gulp.src(path.script.appJs)        
        .pipe(gulp.dest(path.script.dest));
}
function scriptsJson() {
    return gulp.src(path.script.appJson)        
        .pipe(gulp.dest(path.script.dest));
}

function browsersync() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
    });
}

function img() {
    return gulp.src(path.img.app)
        .pipe(imagemin())     
        .pipe(gulp.dest(path.img.dest));
}

function html() {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dest/'))
}

function fonts() {
    return gulp.src('./app/themes/engine/fonts/**/*.*')
        .pipe(gulp.dest('./dest/themes/engine/fonts/'));
}


function watching() {        
    gulp.watch(path.style.mainSass, styleSass);
    gulp.watch(path.style.libsSass, styleLibSass);
    gulp.watch(path.style.bootsSass, bootsSass);    
    gulp.watch(path.script.indexJs, jsWatch);
    gulp.watch('./app/themes/engine/pug/**/*.pug', pug);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch(path.script.libsJs, js);
    gulp.watch(path.script.appJs, browserSync.reload);   
}

let watch = gulp.series(clean, gulp.parallel(watching, browsersync))

let build = gulp.series(clean, gulp.parallel(styles, scripts, scriptsJson, fonts, img, html))

exports.clean = clean;
exports.styles = styles;
exports.js = js;
exports.watch = watch;
exports.build = build;
exports.pug = pug;
exports.delStyle = delStyle;
exports.defauld = build;
