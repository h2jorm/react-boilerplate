const webpack = require('webpack');
const path = require('path');

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
      'whatwg-fetch',
    ],
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
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
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      moment: 'moment',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunk: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

if (!isProduction) {
  module.exports.devtool = '#source-map';
}
