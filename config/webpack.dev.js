var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var cors = require('cors');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    loaders: [{
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        proxy: {
            '/api': {
                // target: 'http://localhost:5000',
                secure: false,
                changeOrigin: true
            }
        }
    }
});