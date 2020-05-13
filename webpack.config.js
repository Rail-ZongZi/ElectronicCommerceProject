const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = {
	// 开发环境设置
	mode: 'development',
	// 入口文件
	entry: {
		'index': './src/pages/index/index.js',
		'home': './src/pages/login/index.js'
	},
	// 输出文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash:8].js'
	},
	// 服务器
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9898,
		// compress: true, // 显示打包的进度条
		progress: true  // 启动 gzip 压缩
	},
	// devtool: "inline-source-map",
	devtool: 'source-map',   // 开启map调式
	// loader配置
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,  // 开启模块化
							importLoaders: 2
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash:8].[ext]',
						outputPath: 'images/',   // 配置打包以后文件别名
						limit: 2048,
						modules: true
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
				use: {
					loader: "file-loader"
				}
			}
		]
	},
	externals: {
		'jquery': 'window.jQuery'    // 引入jQuery
	},
	// 插件
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin({
			// cleanOnceBeforeBuildPatterns: []
		}),    // 清除打包文件
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
		}),
		new HtmlWebpackPlugin({
			// 设置模板 title
			title: 'index页面',
			// 生成 favicon
			favicon: 'favicon.ico',
			// 指定生产html文件依赖的模板
			template: './src/views/index/index.html',
			// 插入 meta标签
			// meta: {
			// 	'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no'
			// }
		}),
		new HtmlWebpackPlugin({
		  title: 'Home页面',
		  favicon: 'favicon.ico',
		  template: './src/views/home/index.html'
		})
	]
}

module.exports = config;
