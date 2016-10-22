var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin') 
 
var config = {
	devtool: 'source-map',
  entry: ['./src/main.js'],
	
  output: {
    path: 'docs/',
    filename: 'bundle.js'
  },
  
  
  
  
    module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel'] },
	  { test: /\.html$/, loader: 'raw' },
	  { test: /\.css$/, loader: 'style!css' },
	  { test: /(eot|ttf|woff|woff2)$/, loader: 'file?name=fonts/webfonts/[name].[ext]' }
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