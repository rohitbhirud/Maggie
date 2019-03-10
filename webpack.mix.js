let mix = require('laravel-mix');

mix.options({
  processCssUrls: false,
});

mix.minify('assets/js/main.js');

mix.sass('assets/sass/screen.scss', 'assets/css/');
