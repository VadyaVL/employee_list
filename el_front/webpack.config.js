const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:7000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },
      {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: ['babel-loader']
      },
      {
          test: /\.(css|scss)$/,
          exclude: [/node_modules/],
          use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
    port: 7000,
    compress: false,
    historyApiFallback: true,
    watchContentBase: true,
    stats: 'minimal',
    disableHostCheck: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
}