const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;
