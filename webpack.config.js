const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
    mode: 'development',  // 'production'
    devtool: "inline-source-map", //'source-map'
    entry: path.join(__dirname,'src','index.js'), //APP ENTRY POINT
    // OUTPUT DIRECTORY
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    // PATH RESOLVE
    resolve: {
        extensions: ['js', 'ts', 'json', 'jsx'],
        publicPath: "/build/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css'],
        alias: {
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            'lodash': path.resolve(__dirname, 'node_modules/lodash'),
            'react-scripts': path.resolve('./node_modules/react-scripts'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                }],

                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: "html-loader",
                }],              

                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[path][name]-[hash:8].[ext]"
                        }
                }],

                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    } 
                },

                test: /\.ts$/, 
                use: [{
                    loader: "ts-loader",
                }],

                test: /\.json$/,
                use: [{
                    loader: "json-loader",
                }]
            }
        ]
    },
    // DEV SERVER ENTRY POINT
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname,'src')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html/",
            filename: "./index.html"
        }),
        new FaviconsWebpackPlugin({
            logo: './public/icon.png',
            prefix: 'assets/',
            inject: true,
            background: '#fff',
            title: 'React CV',
            icons: {
                android: true,
                appleIcon: true,
                favicons: true,
                opengraph: false,
                twitter: false,
        }}),         
    ] 
}