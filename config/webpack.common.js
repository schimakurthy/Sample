var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var cors = require('cors');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        modules: ['node_modules']
    },

    module: {
        loaders: [{
                test: /\.ts?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },        
            {
                test: /\.mp4$/,
                loader: 'file'
            },            
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            },           
            {
                test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    },

    server: {
        middleware: function(req, res, next) {

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE', 'OPTIONS');
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Expose-Headers', 'DAV, content-length, Allow');
            if (req.method === 'OPTIONS') {
                res.status(200);
                res.end();
            } else {
                next();
            }
        },
        changeOrigin: true

    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};