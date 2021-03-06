const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = (env, argv) => {
  return {
    mode: "production",
    entry: { main: "./src/index.js" },
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      filename: "[name].[hash].js"
    },
    target: "web",
    devtool: "source-map",
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.html/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: /\.css/,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                hot: true, // if you want HMR
                reloadAll: true // when desperation kicks in - this is a brute force HMR flag
              }
            },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    },
    plugins: [
      // new HtmlWebPackPlugin({
      //   template: "./src/index.html",
      //   filename: "./index.html",
      //   excludeChunks: ["server"]
      // }),
      new ExtractCssChunks({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css",
        orderWarning: true // Disable to remove warnings about conflicting order between imports
      }),
      new StatsWriterPlugin({
        filename: "stats.json" // Default
      })
    ]
  };
};
