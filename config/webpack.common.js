const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// let webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    stats: {
        all: false,
        modules: true,
        maxModules: 0,
        errors: true,
        warnings: true,
        moduleTrace: true,
        errorDetails: true
    },
    // entry: {
    //     main: './app/main.js',
    //     //popup: './app/popup.js', 
    // },
    devServer: {
        index: 'index.html',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    /* devMode ? 'style-loader' : */
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@use "@/assets/scss/consts.scss" as consts;`
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/[name][hash].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: 'static/[name].[ext]',
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'app/'), // 상위 경로의 위치라서 중간에 '..' 을 추가한다.
            'images': path.join(__dirname, '..', 'app/assets/img/'), // 상위 경로의 위치라서 중간에 '..' 을 추가한다.
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     // title : 'Web-Analyzer',
        //     // template: 'index.html',
        //     // filename: 'index.html',
        //     // chunks: ['main']
        // }),
        // new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        // new VueLoaderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new MiniCssExtractPlugin({
        //     ignoreOrder: true
        // }),
        // // new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en'),
        // new CaseSensitivePathsPlugin(), // 파일 경로 대소문자 구분
    ],

};