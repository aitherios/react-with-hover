const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'WithHover',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
}
