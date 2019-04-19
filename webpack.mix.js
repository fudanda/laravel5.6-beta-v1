const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    .less('resources/less/app.less', 'public/css').webpackConfig({
        // output: {
        //     chunkFilename: 'js/[name].js'
        // },
        module: {
            rules: [{
                    test: /\.less?$/,
                    use: [{
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }]
                },
                // {
                //     test: /\.jsx?$/,
                //     // exclude: /node_modules(?!\/ant-design-vue)/,
                //     use: [{
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['env']
                //         }
                //     }]
                // },


            ]
        }
    })
    .extract(['vue'])
    .browserSync('www.l.com')
    .version([]);
