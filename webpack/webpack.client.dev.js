const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.client.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: process.env.CLIENT_DEV_PORT || 3000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': `http://localhost:${process.env.SERVER_PORT || 5000}`,
    },
  },
  stats: 'errors-warnings',
  devtool: 'eval-cheap-module-source-map',
});
