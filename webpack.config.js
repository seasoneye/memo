const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const _production = process.env.NODE_ENV === 'production'

module.exports = {
	mode: _production ? 'production' : 'development',
	entry: path.resolve(__dirname, 'src/main.js'),
	devtool: _production ? 'source-map' : 'inline-source-map',
	output: {
		filename: 'js/[name].[hash:5].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: _production ? './' : '/',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]-[hash:5].css',
			chunkFilename: 'css/[id]-[hash:5].css',
		}),
		new CleanWebpackPlugin({ verbose: true }),
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin()
	],

	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			'@': path.resolve(__dirname, './src'),
		}
	},

	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				"css-loader"
			],
			exclude: /node_modules/
		},
		{
			test: /\.js$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-syntax-dynamic-import']
					}
				}
			],
			exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
		},
		{
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					limit: 10000,
					esModule: false,
					name: 'images/[name]-[hash:5].[ext]'
				}
			}
			]
		},
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				esModule: false,
				name: 'fonts/[name]-[hash:5].[ext]',
			}
		},
		{
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 4096,
						esModule: false,
						name: 'media/[name]-[hash:5].[ext]',
					}
				}
			]
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		},
		]
	},
}