'use strict';

var options = {

    default_js_file:'global.js', // root folder - assets/js/

    liverReload: true,

    scripts:{
        src: './assets/js/',
        dest:'./dist/js',
        watch: './assets/js/**/*.js'
    },

    styles:{
        src: ['./assets/css/global.scss', './assets/css/base64-fonts.scss', './assets/css/pages/**/*.scss'],
        dest:'./dist/css',
        watch: './assets/css/**/*.scss'
    },

    images:{
        src: ['./assets/images/**/*.+(jpeg|jpg|png|gif)', '!./assets/images/to_webp/**'],
        dest:'./dist/images',
        webp_src:'./assets/images/to_webp/**/*.+(jpeg|jpg|png|gif)',
        svg_src:'./assets/images/**/*.svg'
    },

    jade:{
        src: './assets/jade/*.jade',
        dest: './dist/html/',
        compiled: './dist/html/*.html',
        watch:'./assets/jade/**/*.jade'
    },

    fonts:{
        src:'./assets/fonts/**',
        dest:'./dist/fonts'
    },

    dist: './dist/*',

    pages_list: './pages.json'
};


module.exports = options;