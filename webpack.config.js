var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';

var config = {

  entry: ['./src/main.js'],

  output: {
    path: 'public/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css')
      },      
    ]
  },

  plugins: [ new ExtractTextPlugin('app.css', { allChunks: true }) ],
  
  }
  if (isProduction) {
  /* =================================== PRODUCTION-ONLY ====================================== */

  // by adding the polyfill
  // you can use new built-ins like Promise or WeakMap,
  // static methods like Array.from or Object.assign,
  // instance methods like Array.includes
  config.entry = ['babel-polyfill'].concat(config.entry);

  config.devtool = 'hidden-source-map';

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    })
  );

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, screw_ie8: true },
      comments: false
    })
  );

} else {
  /* =================================== DEVELOPMENT-ONLY ====================================== */

  config.devtool = 'eval';

  config.devServer = {
    headers: { "Access-Control-Allow-Origin": "*" },
    contentBase: 'public/', // where static content is served from
    progress: true, // displays progress bar in the console
    colors: true, // add colors to the console
    stats: 'errors-only' // Display only errors to reduce the amount of output.
  };

}

module.exports = config;