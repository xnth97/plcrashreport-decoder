const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './crash_report.js'
  },
  output: {
    library: 'CrashReport',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'crashreport.min.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
}