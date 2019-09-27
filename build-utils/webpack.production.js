const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [{ 
          loader: 'lit-scss-loader', 
          options: { 
            defaultSkip: true 
          } 
        }, 'extract-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
