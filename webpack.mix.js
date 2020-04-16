let mix = require('laravel-mix');
require('laravel-mix-purgecss');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const shouldAnalyzeBundle = false;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .purgeCss();

//admin theme based on bootstrap 4 + CoreUI
mix
  .js('resources/assets/js/admin.js', 'public/js')
  .sass('resources/assets/sass/admin/admin.scss', 'public/css')
  .purgeCss();

mix.webpackConfig({
  entry: {
    app: ['./resources/assets/sass/app.scss'],
    admin: ['./resources/assets/sass/admin/admin.scss'],
  },
  plugins: [
    new LiveReloadPlugin(),
    new CompressionPlugin(),
    ...(shouldAnalyzeBundle ? [new BundleAnalyzerPlugin()] : [])
  ]
});
