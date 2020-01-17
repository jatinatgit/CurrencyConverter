const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const devServerConfig = require('./devServer.webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: "./src/index.js",
        styles: './src/styles/main.less',
      },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: '[name].js'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.less', '.ejs'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
            loader: require.resolve('file-loader'),
            options: {
                name: '[name].[ext]'
            }
        }, 
        {
            test: /\.(less|css)$/,
            use: [{ loader: MiniCssExtractPlugin.loader},
            {
              loader: "css-loader", options: {
                sourceMap: true
              }
            }, {
              loader: "less-loader", options: {
                sourceMap: true
              }
            }],
    
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    devServer: devServerConfig,
    plugins: [
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        }),
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html", //source html
            title: 'Currency converter',
            inject: 'body',
            env: 'development',
            publicPath: '/'
        }),
        new CopyWebpackPlugin([
            {
              from: './src/assets/images', to: 'assets/images',
            }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
    ]
}