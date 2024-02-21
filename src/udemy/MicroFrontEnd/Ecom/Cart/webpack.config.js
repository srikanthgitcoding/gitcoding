const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3333,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./cartIndex": "./src/index",
      },
      
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
