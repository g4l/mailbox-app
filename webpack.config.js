var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin') 
 
var config = {
	devtool: 'source-map',
  entry: ['./src/main.js'],
	
  output: {
    path: 'build/',
    filename: 'bundle.js'
  },
  
  
  
  
    module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel'] },
	  { test: /\.html$/, loader: 'raw' },
	  { test: /\.css$/, loader: 'style!css' }
    ]
  },
  
  /*
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      hash: true
    })],
	*/
}
module.exports = config;