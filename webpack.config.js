import { resolve } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const entry = {
  app: "./src/index.js",
};

const externals = /lodash/;

const devtool = "inline-source-map";

const plugins = [new CleanWebpackPlugin()];

const output = {
  filename: "[name].bundle.js",
  path: resolve("dist"),
  publicPath: "/",
};

const stats = {
  all: false,
  builtAt: true,
  timings: true,
};

export default {
  entry,
  externals,
  devtool,
  output,
  plugins,
  stats,
};
