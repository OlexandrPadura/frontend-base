const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						unsafe: true,
						inline: true,
						passes: 2,
						keep_fargs: false
					},
					output: {
						beautify: false
					},
					mangle: true
				}
			})
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new CopyPlugin([{ from: 'static', to: '' }])
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		port: 3030,
		hot: true,
		historyApiFallback: true
	}
};
