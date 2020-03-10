const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // 开发环境设置
  mode: 'development',
  // 入口文件
  entry: {
    'index': './src/pages/index/index.js',
    'home': './src/pages/home/index.js'
  },
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  // 服务器
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9898
  },
  devtool: "inline-source-map",
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
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'sass-loader',
					'cnpm '
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash:8].[ext]',
						outputPath: 'images',   // 配置打包以后文件别名
						limit: 2048,
						modules: true
					}
				}
			},
			{
				test: /\.(woff|woff2|svg|ttf|eot)$/i,
				use: {
					loader: "file-loader"
				}
			}
		]
	},
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index页面',
      favicon: 'favicon.ico',
      template: './src/views/index/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Home页面',
      favicon: 'favicon.ico',
      template: './src/views/home/index.html'
    })
  ]
}

module.exports = config;
