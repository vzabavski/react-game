const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry:{
        index: './index.tsx'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //{ enforce: 'pre', test: /\.js$/, loader: "eslint-loader"},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.svg/,
                use: {
                  loader: "svg-url-loader",
                  options: {},
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: 'file-loader?name=assets/fonts/[name].[ext]',
                    },
               ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
    ]
};

