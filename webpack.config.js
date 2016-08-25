const webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE.ENV': JSON.stringify('production')
      }
    })
  ],
  devServer: {
  }
}
