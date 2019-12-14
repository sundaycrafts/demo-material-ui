const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");

const config = {
  production: require("./webpack.config.prod"),
  development: require("./webpack.config.dev")
};

const common = mode => ({
  mode,
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: ["**/*", "!.gitkeep"]
    }),
    new Dotenv(),
    new HtmlPlugin({
      meta: {
        viewport: "width=device-width, initial-scale=1"
      }
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name]-[hash].js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        enforce: "pre",
        use: "css-loader"
      },
      {
        test: /\.(?:png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
});

module.exports = (env, argv) => merge(common(argv.mode), config[argv.mode]);
