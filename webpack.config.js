const path = require('path');

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
}