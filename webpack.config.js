const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(jsx|js)?$/,
      loaders: ['babel-loader'],
      include: SRC_DIR,
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],
  devServer: {
    inline: true,
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true,
  },
};
