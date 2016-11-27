const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'riotui.js',
    path: `${__dirname}/../dist`
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        loader: 'tag2-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          'fallbackLoader': 'style-loader',
          'loader': 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextWebpackPlugin('riotui.css')
  ],
  devServer: {
    contentBase: 'examples',
    inline: true
  }
}
