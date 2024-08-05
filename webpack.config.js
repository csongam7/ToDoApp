const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
     app: './src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
   hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory to serve static files from
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the server on
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
};