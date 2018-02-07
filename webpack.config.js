/*
    ./webpack.config.js
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './app/js/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node-modules/ 
            },
            {
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node-modules/ 
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[ext]",
                },
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
