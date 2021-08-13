const myPath = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 开始递归 构建成树? 构建成图?
  // 入口文件的相对路径(相对于content,没有配置默认是当前路径)
  entry: "./main.js",
  output: {
    filename: "bundle.js",// 可以使用内置的[name]
    // 输出文件目录(相对路径) 
    path: myPath.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        // 正则匹配 loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],// 使用一组 loader
      }
    ]
  },
  plugins: [
    // 使用 plugin 在于掌握其本身的配置项
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
    }),
  ],
  resolve: {
    alias: {
      main:'./components/main'
    },
    extensions:['.ts','.js','.json','.css']
  },
};
