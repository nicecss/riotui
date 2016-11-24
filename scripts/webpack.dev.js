const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'riotui.js',
    path: './dist'
  },
  module: {
    rules: [
    {
      test: /\.tag$/,
      loader: "tag2-loader"
    }
    ]
  },
  devServer: {
    port: 9000,
    hot: true
  }
}