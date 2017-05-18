const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module : {
        loaders: [
            {
                test : /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['stage-2', 'es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;