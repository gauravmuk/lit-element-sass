const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [{ 
          loader: 'polymer-css-loader', 
          options: { 
            defaultSkip: true 
          } 
        }, 'extract-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // Copy empty ServiceWorker so install doesn't blow up
    new CopyWebpackPlugin(['src/sw.js'])
  ],
  devtool: 'source-map'
});
