//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ["./src/main.js"],
	output: {
		path: 'build/',
		filename: "bundle.js",
		publicPath: "/build/"
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ['babel']				
			},
			/*{
				test: /\.css$/,			
				loader: ExtractTextPlugin.extract('css')
			},		
			{
				test: /(eot|ttf|woff|woff2)$/,
				loader: 'file?name=fonts/webfonts/[name].[ext]'
			}*/
		]
	},
	
	//plugins: [ new ExtractTextPlugin('app.css', { allChunks: true }) ],
}