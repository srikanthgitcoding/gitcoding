const HMTLweback = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3330,
  },
  resolve: {
    extensions: [".js"],
  },
  entry: {
    main: "./src/index",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        products: "products@http://localhost:3332/remoteEntry.js",
        carts: "carts@http://localhost:3333/remoteEntry.js",
      },
    }),
    new HMTLweback({
      template: "./public/index.html",
    }),
  ],
};
