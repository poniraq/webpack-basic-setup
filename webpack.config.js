const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '.dist'),
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },

    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images'
                }
            }]
        }, {
            test: /\.(ttf|woff2?|eot)(\?v=.+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts'
                }
            }]
        }]
    }
};