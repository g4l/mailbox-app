// Karma configuration
// Generated on Thu Oct 20 2016 20:25:29 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    /*files: [
		'./src/components/Wrapper/wrapper.spec.js'
      'angular.min.js',
      'angular-mocks.js',
      'app.js',
      'app-tests.js'
    ],*/
	files: [{ pattern: 'spec.bundle.js', watched: false }],


    // list of files to exclude
    exclude: [],
	plugins: [    
      require("karma-chrome-launcher"),
      require("karma-jasmine"),      
      require("karma-sourcemap-loader"),
      require("karma-webpack")
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },
	 
	 webpack: {
      devtool: 'inline-source-map',
      module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel'] },
	  { test: /\.html$/, loader: 'raw' },
	  { test: /\.css$/, loader: 'style!css' },
	  { test: /(eot|ttf|woff|woff2)$/, loader: 'file?name=fonts/webfonts/[name].[ext]' }
		]
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
