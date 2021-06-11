const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './index.js',
    script: './script.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./lib'),
    library: 'sketchPlugin',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}