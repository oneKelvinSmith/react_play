const webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE.ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}
