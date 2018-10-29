const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require("./htmlAfterWebpackPlugin.js");
module.exports = {
  entry: { // 多页多入口
    "index-index":"./project/src/views/index.entry.js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './project/src/views/index.html',
      inject: false // 不让往里面插入
    }),
    new htmlAfterWebpackPlugin()
  ]
}