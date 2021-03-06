// 项目打包配置信息
// 导入node内置path模块
const path = require('path');
// 导入打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导入提取css文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 导入压缩css文件的插件
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // 1. 入口
    entry: './src/index.js',
    // 2. 出口
    output: {
        filename: 'bundle.js',
        publicPath: './'
    },
    // 3. 加载器
    module: {
        // 规则
        rules: [
            {
                test: /\.css$/, // 需要处理的文件
                // css-loader: 将样式打包进bundle.js文件中
                // style-loader: 将bundle.js文件中的样式部分抽离到html文件中
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader'] // 加载器的执行顺序是从右往左依次执行
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader', 'less-loader']
            },
            {
                test: /\.(gif|png|jpg|webp|jpeg)$/,
                loader: 'url-loader',
                options: {
                    name: '[hash:10].[ext]', // 10位随机数组成的图片名
                    limit: 10 * 1024, // 10kb以下的图片打包到js文件中, 否则直接打包到dist目录中
                    esModule: false, // 在node环境中打包图片
                    outputPath: 'img'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'font'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // 4. 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 需要打包的html文件
            filename: 'index.html' // 打包后生成的文件名
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css' // 输出到css文件夹里
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],
    // 5. 模式
    mode: process.env.NODE_ENV,
    // 目标是浏览器
    target: 'web',
    // 开发服务器
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 启动服务器目录
        compress: true, // 启动gzip
        port: 666,  // 端口
        open: true, // 自动打开服务
        publicPath: '/', // 静态资源查找路径
        openPage: 'index.html', // 打开的页面
    },
}