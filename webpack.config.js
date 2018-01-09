const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	watch: true,

	target: 'electron',

	entry: './app/src/entry.js',

	output: {
		path: __dirname + '/app/build',
		publicPath: 'build/',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['react']
				}
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader?sourceMap',
					`css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]`
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	}
}
