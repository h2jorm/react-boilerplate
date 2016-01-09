const webpack = require('webpack');
const path = require('path');
const Cmt2emtPlugin = require('cmt2emt-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-logger',
      'lodash',
      'moment',
      'classnames',
      'isomorphic-fetch',
    ],
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '/images/[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      moment: 'moment',
      lodash: '_',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunk: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new Cmt2emtPlugin({
      source: path.resolve('public/index.html'),
      output: './public/index.html',
      transform: assetName => `/assets/${assetName}`
    })
  ]
};

if (!isProduction) {
  module.exports.devtool = '#source-map';
}
