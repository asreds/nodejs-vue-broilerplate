const webpack = require("webpack");
const path = require("path");
const target_dir = "../../assets/dist/";
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: ["./src/client/app.js"]
  },

  mode: process.env.NODE_ENV || "development",

  output: {
    path: path.resolve(__dirname, target_dir),
    filename:
      process.env.NODE_ENV === "production" ? "[name].[hash].js" : "[name].js",
    chunkFilename:
      process.env.NODE_ENV === "production" ? "[name].[hash].js" : "[name].js",
    publicPath: "/assets/dist/"
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../index.html"),
        to: path.resolve(__dirname, target_dir)
      }
    ])
  ],

  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: "vue-loader"
      }
    ]
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
