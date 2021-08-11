const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {};

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetPlugin(),
			new TerserWebpackPlugin()
		]
	}

	return config;
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: "development",
	// entry: "./index.js",
	entry: {
		index: ['babel-polyfill', './index.js']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "bundle.js"
	},
	optimization: optimization(),
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/fonts'),
					to: path.resolve(__dirname, 'build/fonts')
				},
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'build/images')
				}
			],
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		hot: isDev,
		port: 4000,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"sass-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				},
			},
			// {
			// 	test: /\.(jpg|jpeg|png|svg)/,
			// 	use: ["file-loader"]
			// },
			// {
			// 	test: /\.(woff|woff2)/,
			// 	use: ["file-loader"]
			// }
		]
	}
};
