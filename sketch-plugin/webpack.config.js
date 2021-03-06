const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    // index: './index.js',
    script: './script.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./lib'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/live-server/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}