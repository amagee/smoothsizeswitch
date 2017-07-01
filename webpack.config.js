var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/SmoothSizeSwitch.js',
  },

  output: {
    library: 'smoothSizeSwitch',
    libraryTarget: 'umd',
    filename: './dist/SmoothSizeSwitch.js'
  },

  externals: [
    'react',
    'react-dom'
  ],

  module: {
    rules: [
      { 
        test: /\.json$/, 
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
          ]
        }
      }
    ]
  },

  devtool: 'source-map'
};
