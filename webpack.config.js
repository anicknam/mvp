var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'client'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: ''
  },

  devtool: 'source-map',

  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components|compiled|dist/,
        loader: 'jshint-loader',
      }
    ],
    loaders: [
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components|compiled|dist/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime'],
          cacheDirectory: false
        }
      }
    ]
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.min.css', '.css' ],
    root: [
      path.resolve(__dirname, 'styles'),
      path.resolve(__dirname, 'client'),
      path.resolve(__dirname, 'client/components'),
      path.resolve(__dirname, 'client/config'),
      path.resolve(__dirname, 'client/data'),
      path.resolve(__dirname, 'client/lib')
    ]
  },

  jshint: {
    esversion: 6,
    // any jshint option http://www.jshint.com/docs/options/
    // i. e.
    camelcase: true,

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,

    // custom reporter function
    reporter: function(errors) { }
  },

  debug: true
};
