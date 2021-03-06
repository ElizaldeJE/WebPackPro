
const path = require('path');
const webpack = require('webpack');

// require our plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',  // this is our app
    output: {
        filename: '[name].bundle.js', // the file name would be my entry's name with a ".bundle.js" suffix
        path: path.resolve(__dirname, 'dist') // put all of the build in a dist folder
    },
    plugins: [
         new UglifyJsPlugin({
            sourceMap: true
        }),
        new CleanWebpackPlugin(['dist']), // use the clean plugin to delete the dist folder before a build
        // This plugin creates our index.html that would load the app for us in the browser
        new HtmlWebpackPlugin({
            title: 'Your Phrase Fireworks!'
        })
    ],
    module: {
        rules: [
          // use the html loader
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },
          // use the css loaders (first load the css, then inject the style)
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
