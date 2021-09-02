const HTMLWebPackPlugIn = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: '/node_modules',
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new HTMLWebPackPlugIn({
      template: './src/index.html'
    })
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()])
};
