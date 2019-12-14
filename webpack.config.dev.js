const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  plugins: [new HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "style-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    publicPath: "/",
    open: false
  }
};
