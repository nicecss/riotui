const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'riotui.js',
    path: '/dist'
  },
  module: {
    rules: [{
      test: /\.tag$/,
      loader: "tag2-loader"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: 'examples',
    inline: true,
    hot: true
  }
}
