const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'source-map',
  entry: [ // 使用双服务器模式 、webpack-dev-server作为资源服务器
    './src/examples/example.jsx', // 入口文件
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/', // 以http请求时，对服务器、cdn等静态资源的请求路径
    path: './build', // webpack打包成功后的路径各名字
    // chunkFilename: '[chunkhash].bundle.js', // 自动生成js文件的hash
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'), // 用于分析模块的共用代码, 单独打一个包出来
    new HtmlWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"' + env + '"',
    //   },
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel'],
        include: /src/,
      }, {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include: [path.resolve('src')],
      },
    ],
  },
  resolve: { // resolve.extensions用于指明程序自动补全哪些后缀
    extensions: ['', '.js', '.jsx'], //
  },
  stats: { colors: true },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true,
    },
  },
};
